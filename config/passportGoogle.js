const passport = require("passport");
const User = require("../models/UserModel");
const {
  google
} = require("./config")
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: google.clientId,
    clientSecret: google.clientSecret,
    callbackURL: google.cb
  },
  function (accessToken, refreshToken, profile, done) {
    User.findOne({
        googleId: profile.id
      })
      .then(currentUser => {
        if (currentUser) {
          return done(null, currentUser)
        } else {
          const user = new User({
            username: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            profilePic: profile.photos[0].value
          })
          user.save()
          done(null, user)
        }
      })
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  done(null, id);
});