const express = require('express');
const blogController = require('../controllers/blogsController');

const router = express.Router();

router.get('/posts', blogController.getAll);

router.get('/posts/:id', blogController.getById);

router.post('/posts', blogController.create);

router.put('/posts/:id', blogController.put);

router.delete('/posts/:id', blogController.deleteById);

router.all('*', blogController.showErrorPage);

module.exports = router;