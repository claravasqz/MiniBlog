const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Post = require('../Models/Post');


const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) { 
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image');

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}


router.get('/', (req, res) => {
    const posts = Post.getAllPosts();
    res.render('index', { posts });
});


router.get('/new', (req, res) => {
    res.render('newPost');
});


router.post('/', upload, (req, res) => {
    const { title, content } = req.body;
    let image = '';

    if (req.file) {
        image = `/uploads/${req.file.filename}`;
    }

    Post.createPost(title, content, image);
    res.redirect('/posts');
});


router.post('/:id/delete', (req, res) => {
    const { id } = req.params;
    Post.deletePost(id);
    res.redirect('/posts');
});

module.exports = router;