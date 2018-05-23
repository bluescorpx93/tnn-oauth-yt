const authRouter = require('express').Router();
const passport = require('passport');

authRouter.get('/login', (req, res) => {
  res.render('login');
});

authRouter.get('/logout', (req, res) => {
  res.status(200).send('Handle logout with passport');
});

authRouter.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

module.exports = authRouter;
