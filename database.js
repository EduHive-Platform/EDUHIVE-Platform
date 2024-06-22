const express = require('express');
const mongoose = require('mongoose');

//const app = express();
//const PORT = process.env.PORT || 5000;

// Middleware
//app.use(cors());
//app.use(bodyParser.json());
const dbPassword = 'Any8XVviiJzZEh9A'
const dbConnectionUri = `mongodb+srv://zihanzhao1117:${dbPassword}@cluster0.ftgatsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const dbName = "eduhive";

// MongoDB Connection
async function connectToDB() {
    await mongoose.connect(dbConnectionUri, { dbName });
    console.log("Successfully connected to MongoDB");
}

////
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password_hash: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    dateOfBirth: Date,
    institution: String,
    project: String 
});

const EduUser = mongoose.model('User', userSchema);

module.exports = { connectToDB, EduUser };