const authRouter = require('express').Router();

authRouter.get('/login', (req, res) => {
  res.render('login');
});

authRouter.get('/logout', (req, res) => {
  res.status(200).send('Handle logout with passport');
});

authRouter.get('/google', (req, res) => {
  res.send('Handle with Google');
});

module.exports = authRouter;
