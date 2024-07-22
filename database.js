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

const commentSchema = new mongoose.Schema({
    comment_id: { type: Number, required: false, unique: true },
    project_id: { type: Number, required: true },
    user_id: { type: Number, required: true },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const communitySchema = new mongoose.Schema({
    community_id: Number,
    community_name: String,
    description: String,
    joined_at: { type: Date, default: Date.now },
});

const userCommunitySchema = new mongoose.Schema({
    user_id: Number,
    community_id: Number,
    create_at: { type: Date, default: Date.now },
});

const likeSchema = new mongoose.Schema({
    like_id: Number,
    project_id: Number,  // Changed from post_id to project_id
    user_id: Number,
    created_at: { type: Date, default: Date.now }
});

const EduUser = mongoose.model('User', userSchema);
const Project = mongoose.model('Project', projectSchema);
const Comment = mongoose.model('Comment', commentSchema);
const Community = mongoose.model('Community', communitySchema);
const UserCommunity = mongoose.model('UserCommunity', userCommunitySchema);
const Like = mongoose.model('Like', likeSchema);

module.exports = { connectToDB, EduUser, Project, Comment, Community, UserCommunity, Like};
