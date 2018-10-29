const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/key");

// creating a new google strategy authentication with google
passport.use(
  new GoogleStrategy({
      clientID: keys.googleClientID, // grabs clientID from keys.js file
      clientSecret: keys.googleClientSecret, // grabs ClientSecret from keys.js file
      callbackURL: '/auth/google/callback' // route request for the user
    },
    (accessToken, refreshToken, profile, done) => {

      console.log('access token', accessToken);
      console.log('Refresh token', refreshToken);
      console.log('profile', profile);
    }
  )
);
