const express = require('express');

const router = express.Router();

// Loading Blog model
const Blog = require('../models/Blog');

// Post route for blog
router.post('/blogpost', (req, res) => {
    const { title, category, content } = req.body;
    console.log(req.body);
    const newBlog = new Blog({
        title, 
        category,
        content,
    });
    Blog.create({ title, category, contentg }).then(() => {
        res.send(newBlog);
    });
});

module.exports = router;
