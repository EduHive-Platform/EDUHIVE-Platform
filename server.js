const express = require("express");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDB, EduUser } = require("./database");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');


const port = 3000
const EMAIL_SENDER = "cuiyifan00422@gmail.com";
const EMAIL_PASSWORD = "bngagdgrkvwonwgu";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

// Endpoint to handle user data saving, used in EmailVerification.jsx func handleConfirm
app.post("/save-user", asyncHandler(async (req, res) => {
    const { name, dateOfBirth, institution, email, created_at, password } = req.body;
    password_hash = await bcrypt.hash(password, 10);
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

/* Endpoint of user's login 
    Input: req.body = { email, password } ; email string, code string
    Output: if succeed: res.status(200).json({ message: "Login successfully" });
            if no user: return res.status(400).json({ message: "Invalid email or password" });
            if incorrect password: return res.status(400).json({ message: "Invalid email or password" });
    suggest using bcrypt.compare(password, user.password_hash);
*/
app.post("/login", asyncHandler(async (req, res) => {
    const { email, password } = req.body;

}))


/* Endpoint to send verification email with a code
    Input: req.body = { email, code } ; email string, code string
    Output: if succeed: res.status(200).json({ message: "Verification email sent successfully" });
            if error: res.status(500).send('Error sending verification email');
*/
app.post("/send-verification-email", asyncHandler(async (req, res) => {
    const { email, code } = req.body;


    if (!email || !code) {
        return res.status(400).json({ message: "Invalid email or code", success: false});
    }
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: EMAIL_SENDER,
          pass: EMAIL_PASSWORD
        }
      });

    const emailContent = {
        from: EMAIL_SENDER,
        to: email,
        subject: "Email Verification",
        text: `Your verification code is ${code}`,
    };

    transporter.sendMail(emailContent, (error) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: "Error sending verification email", success: false });
        }
        res.status(200).json({ message: "Successfully sent verification email", success: true });
      });
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


