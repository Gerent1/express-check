const { Timestamps } = require('mongodb');
const mongoose = require('mongoose'); // import mongoose

//create schema database structure
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    coverImg: String,
    tags: [String],
    likes: Number

}, {Timestamps: true});

module.exports = mongoose.model('Post', postSchema); 