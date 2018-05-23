const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/redirect',
      clientID: process.env.GOOGLE_OAUTH_CLIENTID,
      // clientID: '118006337654-b9ossk9nujrhdc7ep76mbmrqugp8ttse.apps.googleusercontent.com',
      clientSecret: process.env.GOOGLE_OAUTH_CLIENTSECRET
      // clientSecret: 'YJtw1BK3o2xXcN8BlYQZZgrc'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Passport callback fired");
      console.log(profile);
      // done();
    }
  )
);
