const express = require('express');
const app = express();
const ENV_VARS = require('dotenv').config();
const port = process.env.PORT || 3000;
const authRoutes = require('./routes/authroutes');
const passportSetup = require('./config/passport-setup');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("MLAB Connection Info");
})

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(cookieSession({
  maxAge: 2*24*60*60*1000,
  keys: [
    process.env.SESSION_COOKIE_KEY
  ]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/home', (req, res) => {
  res.render('home');
});

app.use('/auth', authRoutes);

app.get('*', (req, res) => {
  res.redirect('/home');
});

app.listen(port, ()=>{
  console.log(`Listening on ${port}`);
});
