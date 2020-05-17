const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./config/keys')

const app = express();

// creating an instance of the passport strategy
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        // Adding route to redirect user after auth has been approved
        callbackURL: '/auth/google/callback', 
        // adding final argument to method 
    }, (accessToken, refreshToken, profile, done) => {
        console.log('profile is: ', profile);
    })
);

app.get(
    '/auth/google', 
    passport.authenticate(
        'google', 
        {scope: ['profile','email']}
    )
);

app.get(
    '/auth/google/callback',
    passport.authenticate('google')
)

let PORT =  process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))


