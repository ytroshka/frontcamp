const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const uniqid = require('uniqid');
const util = require('util');

const app = express();
const data = require('./data/data.json');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  logger.info(`date: ${new Date().toLocaleTimeString()}, url: ${req.url}, method: ${req.method}`);
  next();
});

app.listen(3010, () => {
  console.log('listening on 3010');
});

app.route('/posts')
  .get((req, res) => {
    res.send(data);
  })
  .post((req, res) => {
    const {author, content} = req.body;

    const post = {
      'id': uniqid(),
      'author': author || 'User',
      'content': content || 'Content of the post'
    };

    data.push(post);
    res.send('post');
  });

app.route('/posts/:id')
  .get((req, res) => {
    res.send(data.filter(post => {
      return post.id === req.params.id
    })[0]);
  })
  .put((req, res) => {
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
  })
  .delete((req, res) => {
    const id = req.params.id;
    const index = data.findIndex(post => post.id === id);

    if (index !== -1) {
      data.splice(index, 1);
      res.send('delete ' + id);
    } else {
      res.send('nothing to delete');
    }
  });

app.all('*', function (req, res) {
  res.render('./index.ejs');
});