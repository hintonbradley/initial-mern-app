const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const app = express();

// creating an instance of the passport strategy
passport.use(new GoogleStrategy());

// app.get('/', (req, res) => {
//     res.send({hi: 'there'});
// })

let PORT =  process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))


