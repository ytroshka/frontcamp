module.exports = {
  getAuthPage(req, res) {
    res.render('index.ejs');
  },

  getLoginPage(req, res) {
    res.render('login.ejs', {message: req.flash('loginMessage')});
  },

  getSignupPage(req, res) {
    res.render('signup.ejs', {message: req.flash('signupMessage')});
  },

  logout(req, res) {
    req.logout();
    res.redirect('/');
  }
};
