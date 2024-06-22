const express = require("express");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connectToDB, EduUser } = require("./database");

app.use(express.static(__dirname + "/public"));

async function start() {
    await connectToDB();

    return app.listen(3000, () => {
        console.log("Listening on port 3000");
    });
}

if (require.main === module) {
    start().catch((err) => console.error(err));
}

