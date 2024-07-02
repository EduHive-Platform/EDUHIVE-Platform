const mongoose = require('mongoose');

const dbPassword = 'Any8XVviiJzZEh9A';
const dbConnectionUri = `mongodb+srv://zihanzhao1117:${dbPassword}@cluster0.ftgatsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const dbName = "eduhive";

// MongoDB Connection
async function connectToDB() {
    await mongoose.connect(dbConnectionUri, { dbName });
    console.log("Successfully connected to MongoDB");
}

const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password_hash: { type: String, required: false }, // need to be modified to required:false later
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    dateOfBirth: Date,
    institution: String,
    project: String 
});

const projectSchema = new mongoose.Schema({
    project_id: Number,
    user_id: Number,
    community_id: Number,
    title: String,
    content: String,
    status: String,
    requirement_type: {
        working_exp: String,
        tech_stack: [String]
    },
    create_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const EduUser = mongoose.model('User', userSchema);
const Project = mongoose.model('Project', projectSchema);

module.exports = { connectToDB, EduUser, Project };
