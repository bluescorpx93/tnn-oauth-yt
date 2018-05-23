const authRouter = require('express').Router();
const passport = require('passport');

authRouter.get('/login', (req, res) => {
  res.render('login', {user: req.user});
});

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/home');
});

authRouter.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

authRouter.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send(req.user);
  res.redirect('/profile');
});

module.exports = authRouter;
