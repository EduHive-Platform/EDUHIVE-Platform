const express = require("express");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDB, EduUser, Project, Comment, Community, UserCommunity, Like, StartUp } = require("./database");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

// Endpoint to handle user data saving, used in EmailVerification.jsx func handleConfirm
app.post("/save-user", asyncHandler(async (req, res) => {
    try {
        const { name, dateOfBirth, institution, email, created_at, password } = req.body;
        const password_hash = await bcrypt.hash(password, 10);

        const newUser = new EduUser({
            username: name,
            password_hash,
            email,
            dateOfBirth,
            institution,
            created_at,
        });

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

    res.status(200).json({ message: "Login successfully", data: user });
}));

app.post("/send-verification-email", asyncHandler(async (req, res) => {
    const { email, code } = req.body;

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

// Get all comments
app.get("/comments", asyncHandler(async (req, res) => {
    const comments = await Comment.find();
    res.status(200).json(comments);
}));

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

// Update a comment
app.put("/comments/:id", asyncHandler(async (req, res) => {
    const { project_id, email, content } = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, { project_id, email, content }, { new: true });
    if (!updatedComment) {
        return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(updatedComment);
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

// CRUD operations for likes

// Get all likes
app.get("/likes", asyncHandler(async (req, res) => {
    const likes = await Like.find();
    res.status(200).json(likes);
}));

// Get like by ID
app.get("/likes/:id", asyncHandler(async (req, res) => {
    const likes = await Like.findById(req.params.id);
    if (!likes) {
        return res.status(404).json({ message: "Likes not found" });
    }
    res.status(200).json(likes);
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

// Update a like
app.put("/likes/:id", asyncHandler(async (req, res) => {
    const { project_id, user_id } = req.body;
    const updatedLike = await Like.findByIdAndUpdate(req.params.id, { project_id, user_id }, { new: true });
    if (!updatedLike) {
        return res.status(404).json({ message: "Likes not found" });
    }
    res.status(200).json(updatedLike);
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

// Route to get projects, comments, likes by community name 
app.get('/projects/community/:communityName', async (req, res) => {
    const { communityName } = req.params;
    
    try {
        const community = await Community.findOne({ community_name: communityName });
        if (!community) {
            return res.status(404).json({ message: 'Community not found' });
        }
        
        const projects = await Project.find({ community_id: Number(community.community_id) }).lean();
        const projectIds = projects.map(project => project.project_id);
        console.log(projectIds)
        
        const comments = await Comment.aggregate([
            { $match: { project_id: { $in: projectIds } } },
            { $group: { _id: "$project_id", comments: { $push: "$$ROOT" } } }
        ]);
        console.log(comments)
        
        const commentsMap = new Map(comments.map(comment => [comment._id.toString(), comment.comments]));
        console.log(commentsMap)

        const likesCount = await Like.aggregate([
            { $match: { project_id: { $in: projectIds } } },
            { $group: { _id: "$project_id", count: { $sum: 1 } } }
        ]);
        console.log(likesCount)

        const likesMap = new Map(likesCount.map(item => [item._id.toString(), item.count]));
        console.log(likesMap)
 
        const projectsWithDetails = projects.map(project => ({
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

  
async function start() {
    await connectToDB();

    return app.listen(port, () => {
        console.log("Listening on port 3000");
    });
}

if (require.main === module) {
    start().catch((err) => console.error(err));
}
