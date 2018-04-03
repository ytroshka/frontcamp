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
        res.send(data[0]);
      } else {
        res.status(404).send('not found');
      }
    });
  },

  create(req, res) {
    const {author, content, blogId} = req.body;

    const item = Blog({
      'blogId': blogId || uniqid(),
      'author': author || 'User',
      'content': content || 'Content of the post'
    });

    item.save(err => {
      if (err) {
        throw err;
      }
      res.status(200).send('post');
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
        res.send({message: 'update', blog: newItem});
      } else {
        res.send({message: 'post', blog: newItem});
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
        res.send({message: 'delete ' + id});
      } else {
        res.status(404).send('nothing to delete');
      }
    });
  }
};
