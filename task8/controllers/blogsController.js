const uniqid = require('uniqid');
const Blog = require('../models/blog');

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

    Blog.findById(id, (err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        res.send(data);
      } else {
        res.status(404).send('not found');
      }
    });
  },

  create(req, res) {
    const {author, content} = req.body;

    const item = Blog({
      '_id': uniqid(),
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

    Blog.findById(id, (err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        data.author = author;
        data.content = content;
        data.save((err, data) => {
          if (err) {
            throw err;
          }
          res.send(data._id + ' update');
        });
      } else {
        const item = Blog({
          '_id': id,
          'author': author || 'User',
          'content': content || 'Content of the post'
        });

        item.save((err, data) => {
          if (err) {
            throw err;
          }
          res.send(data._id + ' post');
        });
      }
    });
  },

  deleteById(req, res) {
    const id = req.params.id;

    Blog.findByIdAndRemove(id, (err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        res.send('delete ' + id);
      } else {
        res.status(404).send('nothing to delete');
      }
    });
  },

  showErrorPage(req, res) {
    res.render('./error.ejs');
  }
};
