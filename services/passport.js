const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');

// pulling users Schema (model) out of our database:
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    // (using user.id to get Mongo db generated id for user instance)
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

// creating an instance of the passport strategy
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        // Adding route to redirect user after auth has been approved
        callbackURL: '/auth/google/callback', 
        proxy: true
        // adding final argument to method 
    }, (accessToken, refreshToken, profile, done) => {
        // check to see if we have a user in db already:
        User.findOne({googleId: profile.id})
        .then((existingUser) => {
            if (existingUser) {
                // return cookie
                // calling done to end function
                done(null, existingUser)
            } else {
                // saving a new user and returning a cookie:
                new User({ googleId: profile.id }).save()
                // calling done to end function 
                .then(user => done(null, user))
            }
        })
    })
);