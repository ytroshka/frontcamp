const express = require('express');
const userController = require('../controllers/usersController');
const passport = require('passport');
const router = express.Router();

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/posts',
    failureRedirect: '/login',
    failureFlash: true
  })
);

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/posts',
    failureRedirect: '/signup',
    failureFlash: true
  })
);

router.get('/', userController.getAuthPage);

router.get('/login', userController.getLoginPage);

router.get('/signup', userController.getSignupPage);

router.get('/logout', userController.logout);

module.exports = router;