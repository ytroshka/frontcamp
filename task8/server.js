const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const blogs = require('./routes/blogs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('Connected!')});

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  logger.info(`date: ${new Date().toLocaleTimeString()}, url: ${req.url}, method: ${req.method}`);
  next();
});

app.use('/', blogs);

app.listen(3010, () => {
  console.log('listening on 3010');
});