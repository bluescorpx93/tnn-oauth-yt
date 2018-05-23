const authRouter = require('express').Router();

authRouter.get('/login', (req, res, next) => {
  res.render('login');
});

authRouter.get('/logout', (req, res, next) => {
  res.send('Handle logout with passport');
});

authRouter.get('/google', (req, res, next) => {
  res.send('Handle with Google');
});

module.exports = authRouter;
