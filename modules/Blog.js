const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    comment: [{
        authorid: String,
        commentdetail: String,
        commentDate: {
            type: Date,
            default: Date.now
        },
    }],
});

module.exports = Blog = mongoose.model('blog', BlogSchema);