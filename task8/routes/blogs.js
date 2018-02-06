const express = require('express');
const blogController = require('../controllers/blogsController');

const router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

router.get('/', isLoggedIn, blogController.getAll);

router.get('/:id', isLoggedIn, blogController.getById);

router.post('/', isLoggedIn, blogController.create);

router.put('/:id', isLoggedIn, blogController.put);

router.delete('/:id', isLoggedIn, blogController.deleteById);

module.exports = router;