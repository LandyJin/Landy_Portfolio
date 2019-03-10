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

// @route DELETE api/blogs
// @desc Delete a Blog
// @access Public

router.delete('/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => blog.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});

// @route PUT api/blogs
// @desc Put a Blog
// @access Public

router.put('/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => blog.save(blog.name = req.body.name).then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});

module.exports = router;