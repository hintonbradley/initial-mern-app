const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');

// pulling users Schema (model) out of our database:
const User = mongoose.model('users');

// creating an instance of the passport strategy
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        // Adding route to redirect user after auth has been approved
        callbackURL: '/auth/google/callback', 
        // adding final argument to method 
    }, (accessToken, refreshToken, profile, done) => {
        // saving a new user:
        new User({ googleId: profile.id }).save();
    })
);