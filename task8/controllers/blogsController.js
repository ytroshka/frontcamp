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

    Blog.find({blogId: id}, (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length) {
        data[0].author = author;
        data[0].content = content;
        data[0].save((err, data) => {
          if (err) {
            throw err;
          }
          res.send('update');
        });
      } else {
        const item = Blog({
          'blogId': id,
          'author': author || 'User',
          'content': content || 'Content of the post'
        });

        item.save((err, data) => {
          if (err) {
            throw err;
          }
          res.send('post');
        });
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
