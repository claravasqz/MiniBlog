const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');


router.get('/', (req, res) => {
    const posts = Post.getAllPosts();
    res.render('index', { posts });
});


router.get('/new', (req, res) => {
    res.render('newPost');
});


router.post('/', (req, res) => {
    const { title, content } = req.body;
    Post.createPost(title, content);
    res.redirect('/posts');
});


router.post('/:id/delete', (req, res) => {
    const { id } = req.params;
    Post.deletePost(id);
    res.redirect('/posts');
});

module.exports = router;