const express = require('express');
const blogController = require('../controllers/blogsController');

const router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

router.get('/posts', isLoggedIn, blogController.getAll);

router.get('/posts/:id', isLoggedIn, blogController.getById);

router.post('/posts', isLoggedIn, blogController.create);

router.put('/posts/:id', isLoggedIn, blogController.put);

router.delete('/posts/:id', isLoggedIn, blogController.deleteById);

module.exports = router;