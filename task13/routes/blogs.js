const express = require('express');
const blogController = require('../controllers/blogsController');

const router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

router.get('/', blogController.getAll);

router.get('/:id', blogController.getById);

router.post('/', blogController.create);

router.put('/:id', blogController.put);

router.delete('/:id', blogController.deleteById);

module.exports = router;