const Blog = require('../models/blog');
const uniqid = require('uniqid');

module.exports = {
  getAll(req, res) {
    Blog.find({}, (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  },

  getById(req, res) {
    const id = req.params.id;

    Blog.find({blogId: id}, (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length) {
        res.send(data);
      } else {
        res.status(404).send('not found');
      }
    });
  },

  create(req, res) {
    const {author, content} = req.body;

    const item = Blog({
      'blogId': uniqid(),
      'author': author || 'User',
      'content': content || 'Content of the post'
    });

    item.save(err => {
      if (err) {
        throw err;
      }
      res.send('post');
    });
  },

  put(req, res) {
    const {author, content} = req.body;
    const id = req.params.id;
    const newItem = {
      author,
      content,
      blogId: id
    };

    Blog.findOneAndUpdate({blogId: id}, {$set: newItem}, {upsert: true}, function (err, updatedBlog) {
      if (err) {
        throw err;
      }
      if (updatedBlog) {
        res.send('update ' + updatedBlog.blogId);
      } else {
        res.send('post');
      }
    });
  },

  deleteById(req, res) {
    const id = req.params.id;

    Blog.remove({blogId: id}, (err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        res.send('delete ' + id);
      } else {
        res.status(404).send('nothing to delete');
      }
    });
  }
};
