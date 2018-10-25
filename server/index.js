const express = require("express"); // older way of importing.. newer way is import express from 'express';
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/key");

const app = express();

// creating a new google strategy authentication with google
passport.use(
  new GoogleStrategy(
    {
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

app.get(
  "/auth/google",
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

// route to turn clients request into a profile, rather than an initial authentication
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running');
});
