const express = require('express');
const router = express.Router();

// Blog Model
const Blog = require('../../modules/Blog');

// @route Get api/blogs
// @desc Get All Blogs
// @access Public

router.get('/', (req, res) => {
    Blog.find()
        .sort({ date: -1 })
        .then(blogs => res.json(blogs))
});

// @route POST api/blogs
// @desc create new Blog
// @access Public

router.post('/', (req, res) => {
    const newBlog = new Blog({
        name: req.body.name,
    })

    newBlog.save().then(blog => res.json(blog))
});

module.exports = router;