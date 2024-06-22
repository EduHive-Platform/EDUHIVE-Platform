const express = require("express");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDB, EduUser } = require("./database");
const port = 3000

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

// Endpoint to handle user data saving, used in EmailVerification.jsx func handleConfirm
app.post("/save-user", asyncHandler(async (req, res) => {
    const { name, dateOfBirth, institution, email, created_at } = req.body;
    const newUser = new EduUser({
        username: name,
        email,
        dateOfBirth,
        institution,
        created_at,
    });

    await newUser.save();
    res.status(200).json({ message: "User saved successfully", data: newUser });
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


