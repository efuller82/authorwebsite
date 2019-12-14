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
  Blog.create({ title, category, content }).then(() => {
    res.send(newBlog);
  });
});

// Get route for all blogs
router.get('/all', (req, res) => {
  Blog.find({}, (err, blogs) => {
    res.send(blogs);
    console.log(blogs);
  });
});

//! trying delete route for blogs
router.delete('/all/:id', function(req, res) {
  Blog.findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
