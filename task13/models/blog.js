const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  blogId: String,
  author: String,
  content: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;