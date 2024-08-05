const express = require("express");
const mongoose = require('mongoose');
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDB, EduUser, Project, Comment, Community, UserCommunity, Like, StartUp, ShortResearch, LongResearch, Verification, Access} = require("./database");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const crypto = require('crypto')
const { ObjectId } = require('mongodb')

dotenv.config();

const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));



app.get('/subSquare', asyncHandler(async (req, res) => {
    try {
      // Extract prioritization and filter parameters
      const { prioritization, filters } = req.query;
  
      // Default prioritization if none provided
      const defaultPrioritization = ['status', 'title', 'area', 'credit', 'job_type', 'job_descriptions', 'skills_or_requirements', 'institution', 'duration', 'signature'];
      const prioritizationOrder = prioritization ? prioritization.split(',') : defaultPrioritization;
  
      let filterParams = {};
      try {
        filterParams = JSON.parse(filters);
      } catch (err) {
        return res.status(400).json({ message: "Invalid filters format. Expected JSON object." });
      }
  
      let query = {};
      for (const key of prioritizationOrder) {
        if (filterParams[key]) {
          const { value, type } = filterParams[key];
          if (type === 'exact') {
            query[key] = new RegExp(`^${value}$`, 'i'); // Exact match
          } else if (type === 'fuzzy') {
            query[key] = new RegExp(value, 'i'); // Partial match
          }
        }
      }
  
      // Log the constructed query object
      console.log("Constructed query:", query);
  
      const startups = await StartUp.find(query).sort({ create_at: -1 });
      res.status(200).json(startups);
    } catch (error) {
      console.error('Error fetching startups:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }));
  
  

// Endpoint to handle user data saving, used in EmailVerification.jsx func handleConfirm
app.post("/save-user-verification", asyncHandler(async (req, res) => {
    try {
        const { name, dateOfBirth, institution, email, created_at, password, code } = req.body;
        const findUser = await EduUser.findOne({email: email})
        if (findUser){
            return res.status(400).json({error: "User already exists"});
        }
        const password_hash = await bcrypt.hash(password, 10);
        const newUser = new EduUser({
            username: name,
            password_hash,
            email,
            dateOfBirth,
            institution,
            created_at,
        });
        const verification_code = (await Verification.findOne({email: email})).code;
        if (!verification_code || verification_code != code) {
            return res.status(400).json({error: 'Verification code is expired, or is wrong.'});
        } else {
            await Verification.findOneAndDelete({email: email});
        }
        await newUser.save();
        res.status(200).json({ message: "User saved successfully", data: newUser });
    } catch (error) {
        console.error('Error saving user:', error);
        if (error.code === 11000) { // MongoDB duplicate key error code
            const duplicateField = Object.keys(error.keyValue)[0];
            res.status(400).json({ error: `Duplicate key error: ${duplicateField} already exists.` });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}));
// Error handling middleware for async errors
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});


app.post("/save-project", asyncHandler(async (req, res) => {
    const { email, project } = req.body;

    if (!email || !project) {
        return res.status(400).json({ message: "Invalid email or project" });
    }

    const user = await EduUser.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "No user with that email" });
    }

    user.projects = user.projects || [];
    user.projects.push(project);
    await user.save();

    res.status(200).json(user);
}));

app.post("/login", asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const user = await EduUser.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
    }
    //Generate random access token
    const generateAccessToken = (length) => {
        // Generate secure random bytes
        return crypto.randomBytes(length)
               .toString('base64')  // Encode in base64
               .replace(/\+/g, '-') // Replace + with - (URL safe)
               .replace(/\//g, '_') // Replace / with _ (URL safe)
               .replace(/=+$/, ''); // Remove trailing =
    }
    
    // Generate a 128-bytes long access token
    const token = generateAccessToken(128);
    const accessToken = new Access({email: email, token: token})
    await accessToken.save()

    res.status(200).json({ message: "Login successfully", data: user, token: token});
}));

app.post("/send-verification-email", asyncHandler(async (req, res) => {
    const { email } = req.body;
    const verification_code_exists = await Verification.findOne({email: email})
    if (verification_code_exists){
        return res.status(400).json({ message: "Verification code is already sent!" });
    }
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    const email_sender = process.env.EMAIL_SENDER;
    const email_password = process.env.EMAIL_PASSWORD;

    if (!email || !code) {
        return res.status(400).json({ message: "Invalid email or code", success: false });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: email_sender,
            pass: email_password
        }
    });

    const emailContent = {
        from: email_sender,
        to: email,
        subject: "Eduhive login verification code",
        text: `Your verification code is ${code}\n\nEduhive Team`,
    };

    transporter.sendMail(emailContent, (error) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: "Error sending verification email", success: false });
        }
        
        const verification = new Verification({
            email: email,
            code: code
        });
        verification.save();

        res.status(200).json({ message: "Successfully sent verification email", success: true });
    });
}));

// CRUD operations for project

// Get all projects
app.get("/projects", asyncHandler(async (req, res) => {
    const projects = await Project.find();
    res.status(200).json(projects);
}));

// Get project by ID
app.get("/projects/:id", asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (!project) {
        return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
}));

// Create a new project
app.post("/projects", asyncHandler(async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
}));

// Update a project
app.put("/projects/:id", asyncHandler(async (req, res) => {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProject) {
        return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(updatedProject);
}));

// Delete a project
app.delete("/projects/:id", asyncHandler(async (req, res) => {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
        return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully" });
}));

// CRUD operations for comment

// Get comment by ID
app.get("/comments/:id", asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(comment);
}));

// Create a new comment
app.post("/comments", asyncHandler(async (req, res) => {
    const { project_id, email, content } = req.body;
    if (!project_id) {
        return res.status(400).json({ message: "Project ID is required" });
    }
    const newComment = new Comment({ project_id, email, content });
    await newComment.save();
    res.status(201).json(newComment);
}));


// Delete a comment
app.delete("/comments/:id", asyncHandler(async (req, res) => {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    if (!deletedComment) {
        return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
}));

// Get projects by partial title match
app.get("/projects/title/:title", asyncHandler(async (req, res) => {
    const projectTitle = req.params.title;
    const projects = await Project.find({ title: { $regex: projectTitle, $options: 'i' } });
    if (projects.length === 0) {
        return res.status(404).json({ message: "No projects found with that title" });
    }
    res.status(200).json(projects);
}));



// Create a new like
app.post("/likes", asyncHandler(async (req, res) => {
    const { project_id, email } = req.body;
    if (!project_id) {
        return res.status(400).json({ message: "Project ID is required" });
    }
    const newLike = new Like({ project_id, email });
    await newLike.save();
    res.status(201).json(newLike);
}));

// Delete a like
app.delete("/likes/:id", asyncHandler(async (req, res) => {
    const deletedLike = await Like.findByIdAndDelete(req.params.id);
    if (!deletedLike) {
        return res.status(404).json({ message: "Likes not found" });
    }
    res.status(200).json({ message: "Likes deleted successfully" });
}));

// Get projects by partial title match
app.get("/projects/title/:title", asyncHandler(async (req, res) => {
    const projectTitle = req.params.title;
    const projects = await Project.find({ title: { $regex: projectTitle, $options: 'i' } });
    if (projects.length === 0) {
        return res.status(404).json({ message: "No projects found with that title" });
    }
    res.status(200).json(projects);
}));


// Get communities by partial name match
app.get("/communities/name/:name", asyncHandler(async (req, res) => {
    const communityName = req.params.name;
    const communities = await Community.find({ community_name: { $regex: communityName, $options: 'i' } });
    if (communities.length === 0) {
        return res.status(404).json({ message: "No communities found with that name" });
    }
    res.status(200).json(communities);
}));

// Get all users by partial name match
app.get("/users/name/:name", asyncHandler(async (req, res) => {
    const userName = req.params.name;
    const users = await EduUser.find({ username: { $regex: userName, $options: 'i' } });
    if (users.length === 0) {
        return res.status(404).json({ message: "No users found with that name" });
    }
    res.status(200).json(users);
}));

// Add a new endpoint for form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Form data received:', formData);
    // Here you can handle the form data (e.g., save it to a database)
    res.status(200).json({ message: 'Form data received successfully', data: formData });
  });  

// Add endpoint to fetch projects
app.get("/api/projects", asyncHandler(async (req, res) => {
    const projects = await Project.find(); // Assuming 'Project' is your mongoose model
    res.status(200).json(projects);
}));

// save communities 
app.post('/communities', async(req, res) => {
    const { community_name, community_id, description } = req.body
    if (!community_name || !community_id || !description) {
        return res.status(400).json({ message: "community_id and communityName and community description is required" });
    }
    const newCommunity = new Community({ community_name, community_id, description });
    await newCommunity.save();
    res.status(201).json(newCommunity);
})

const subTableModels = {
    StartUp: StartUp
};

app.get('/projects/community/:communityName', async (req, res) => {
    const { communityName } = req.params;
    //console.log(StartUp)
    
    try {
        const community = await Community.findOne({ community_name: communityName });
        if (!community) {
            return res.status(404).json({ message: 'Community not found' });
        }
        
        const projects = await Project.find({ community_id: Number(community.community_id) }).lean();
        const projectIds = projects.map(project => project.project_id);

        // Fetch projects from sub-tables based on project_type
        const subTableProjects = await Promise.all(projects.map(async project => {
            const subTableModel = subTableModels[project.project_type];
            //console.log(subTableModel)
            if (subTableModel) {
                const subTableProject = await subTableModel.findOne({ _id: new ObjectId(project.project_id) }).lean();
                //console.log(subTableProject)
                return { ...project, ...subTableProject };
            }
            return project;
        }));
        //console.log(subTableProjects)

        const comments = await Comment.aggregate([
            { $match: { project_id: { $in: projectIds } } },
            { $group: { _id: "$project_id", comments: { $push: "$$ROOT" } } }
        ]);
        console.log(comments)
        
        const commentsMap = new Map(comments.map(comment => [comment._id.toString(), comment.comments]));

        const likesCount = await Like.aggregate([
            { $match: { project_id: { $in: projectIds } } },
            { $group: { _id: "$project_id", count: { $sum: 1 } } }
        ]);
        console.log(likesCount)

        const likesMap = new Map(likesCount.map(item => [item._id.toString(), item.count]));

        const projectsWithDetails = subTableProjects.map(project => ({
            ...project,
            comments: commentsMap.get(project.project_id.toString()) || [],
            num_likes: likesMap.get(project.project_id.toString()) || 0
        }));
        
        res.json(projectsWithDetails);
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



app.post('/save-startup', async (req, res) => {
    const { email, project } = req.body;
    if (!email || !project) {
        return res.status(400).json({ message: "Invalid email or project" });
    }
    // 加上password验证
    const user = await EduUser.findOne({ email: email });
    if (!user) {
        return res.status(404).json({ message: "No user with that email" });
    }

    const newStartUp = new StartUp({
        email: user.email, // Assuming user_id should be the MongoDB ObjectId
        community_id: project.community_id,
        status: project.status,
        create_at: new Date(),
        updated_at: new Date(),
        title: project.title,
        description: project.description,
        area: project.area,
        credit: project.credit,
        job_type: project.job_type,
        num_employees: project.num_employees,
        job_descriptions: project.job_descriptions,
        skills_or_requirements: project.skills_or_requirements,
        institution: project.institution,
        duration: project.duration,
        other_info: project.other_info,
        signature: project.signature
    });

    try {
        const savedStartUp = await newStartUp.save();
        const newProject = new Project({
            project_id: savedStartUp._id.toString(),
            project_type: "StartUp",
            community_id: savedStartUp.community_id,
            email: savedStartUp.email
        })
        const savedProject = await newProject.save();
        res.status(201).json(savedStartUp);
    } catch (error) {
        console.error('Failed to save startup:', error);
        res.status(500).json({ message: 'Failed to save startup' });
    }
});

app.post('/save-short-research', async (req, res) => {
    const { email, project } = req.body;
    if (!email || !project) {
        return res.status(400).json({ message: "Invalid email or project" });
    }
    // 加上password验证
    const user = await EduUser.findOne({ email: email });
    if (!user) {
        return res.status(404).json({ message: "No user with that email" });
    }

    const newShortResearch = new ShortResearch({
        email: user.email, // Assuming user_id should be the MongoDB ObjectId
        community_id: project.community_id,
        status: project.status,
        create_at: new Date(),
        updated_at: new Date(),
        title: project.title,
        description: project.description,
        area: project.area,
        credit: project.credit,
        job_type: project.job_type,
        num_employees: project.num_employees,
        job_descriptions: project.job_descriptions,
        skills_or_requirements: project.skills_or_requirements,
        institution: project.institution,
        duration: project.duration,
        other_info: project.other_info,
        signature: project.signature
    });

    try {
        const savedShortResearch = await newShortResearch.save();
        const newProject = new Project({
            project_id: savedShortResearch._id.toString(),
            project_type: "ShortResearch",
            community_id: savedShortResearch.community_id,
            email: savedShortResearch.email
        })
        const savedProject = await newProject.save();
        res.status(201).json(savedShortResearch);
    } catch (error) {
        console.error('Failed to save startup:', error);
        res.status(500).json({ message: 'Failed to save startup' });
    }
});

  
async function start() {
    await connectToDB();

    return app.listen(port, () => {
        console.log("Listening on port 3000");
    });
}


if (require.main === module) {
    start().catch((err) => console.error(err));
}
