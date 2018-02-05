const passport = require('passport');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs');
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/posts',
  failureRedirect: '/login',
  failureFlash: true
}));

router.get('/login', (req, res) => {
  res.render('login.ejs', {message: req.flash('loginMessage')});
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.get('/signup', (req, res) => {
  res.render('signup.ejs', {message: req.flash('signupMessage')});
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;