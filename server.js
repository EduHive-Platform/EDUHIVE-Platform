const express = require("express");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDB, EduUser } = require("./database");
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

// Log incoming requests for debugging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Endpoint to handle user data saving, used in EmailVerification.jsx func handleConfirm
app.post("/save-user", asyncHandler(async (req, res) => {
    const { name, dateOfBirth, institution, email, created_at, password } = req.body;
    if (!name || !dateOfBirth || !institution || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
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

    await newUser.save();
    res.status(200).json({ message: "User saved successfully", data: newUser });
}));

// Endpoint of saving user's project into the table
app.post("/save-project", asyncHandler(async (req, res) => {
    const { email, project } = req.body;

    if (!email || !project) {
        return res.status(400).json({ message: "Invalid email or project" });
    }

    const user = await EduUser.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "No user with that email!" });
    }

    user.projects = user.projects || [];
    user.projects.push(project);
    await user.save();

    res.status(200).json({user, message:"project saved successfully"});
}));

// Endpoint of user's login
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

    res.status(200).json({ message: "Login successfully", user });
}));

// Endpoint to send verification email with a code
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

// Connect to the database and start the server
async function start() {
    await connectToDB();

    return app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}

if (require.main === module) {
    start().catch((err) => console.error(err));
}
