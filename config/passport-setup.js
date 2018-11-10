const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user');
const AppKeys = require('../keys/appKeys');

passport.serializeUser( (user, done) => {
  done(null, user._id);
});

passport.deserializeUser( (id, done) => {
  User.findById(id)
  .then( (user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/redirect',
      clientID: AppKeys.GOOGLE_OAUTH_CLIENTID,
      clientSecret: AppKeys.GOOGLE_OAUTH_CLIENTSECRET
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({
        googleID: profile.id
      })
      .then( currentUser => {
        if (!currentUser){
          var user = new User({
            username: profile.displayName,
            googleID: profile.id,
            gender: profile.gender,
            profile_pic: profile.photos[0].value
          });

          user.save()
          .then( newuser => {
            console.log("Created User ",newuser);
          })
          .catch( err => {
            console.log("MLAB Error ", err);
          });

          done(null, user);

        } else {
          console.log("Current User is ", currentUser);
          done(null, currentUser);
        }
      })
      .catch( err => {
        console.log(err);
      })
      // done();
    }
  )
);
