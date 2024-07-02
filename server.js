const express = require("express");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDB, EduUser, Project, Comment, Community, UserCommunity, Likes} = require("./database");
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
}));

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


async function start() {
    await connectToDB();

    return app.listen(port, () => {
        console.log("Listening on port 3000");
    });
}

if (require.main === module) {
    start().catch((err) => console.error(err));
}
