const uniqid = require('uniqid');
const data = require('../data/data.json');

module.exports = {
  getAll(req, res) {
    res.send(data);
  },

  getById(req, res) {
    const id = req.params.id;
    const index = data.findIndex(post => post.id === id);

    if (index !== -1) {
      res.send(data[index]);
    } else {
      res.status(404).send('not found');
    }
  },

  create(req, res) {
    const {author, content} = req.body;

    const post = {
      'id': uniqid(),
      'author': author || 'User',
      'content': content || 'Content of the post'
    };

    data.push(post);
    res.send('post');
  },

  put(req, res) {
    const {author, content} = req.body;
    const id = req.params.id;
    const index = data.findIndex(post => post.id === id);
    const post = {
      'id': id,
      'author': author || 'User',
      'content': content || 'Content of the post'
    };

    if (index === -1) {
      data.push(post);
    } else {
      data[index] = post;
    }
    res.send('post ' + id);
  },

  deleteById(req, res) {
    const id = req.params.id;
    const index = data.findIndex(post => post.id === id);

    if (index !== -1) {
      data.splice(index, 1);
      res.send('delete ' + id);
    } else {
      res.status(404).send('nothing to delete');
    }
  },

  showErrorPage(req, res) {
    res.render('./index.ejs');
  }
};
