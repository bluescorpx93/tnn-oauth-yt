const profileRouter = require('express').Router();

profileRouter.get('/', (req, res) => {
  res.render('profile', {user: req.user});
});

module.exports = profileRouter;
