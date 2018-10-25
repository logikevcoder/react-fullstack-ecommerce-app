const express = require('express'); // older way of importing.. newer way is import express from 'express';
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// creating a new google strategy authentication with google
passport.use(new GoogleStrategy()); 

const PORT = process.env.PORT || 5000;
app.listen(PORT);