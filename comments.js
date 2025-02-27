// Create web server
// Create a comment on a post
// Delete a comment on a post
// Get all comments on a post
// Update a comment on a post
// Get all comments

// Require express, body-parser, and mongoose
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create a web server
const app = express();

// Use express to parse JSON
app.use(bodyParser.json());

// Connect to database
mongoose.connect('mongodb://localhost:27017/comments', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Create a schema
const commentSchema = new mongoose.Schema({
    post: String,