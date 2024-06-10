const express = require('express');//import express
// create router
const router = express.Router();
//import Post  model
const Post = require('../models/post');

// create a GET route
router.get('/', (req, res) => {
    res.send('Hello World from Router file');
});


//end point to get all blog posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find(); //get all posts
        res.status(200).json(posts); //send posts as response
    } catch (err) {
        res.status(404).json({ message: err.message }); //catch error
    }

});

//Create  new post
router.post('/createpost', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        coverImg: req.body.coverImg,
        tags: req.body.tags,
        likes: req.body.likes
    });
});

//export router
module.exports = router;
