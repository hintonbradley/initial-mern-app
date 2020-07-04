const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const config = require('./config/keys');

// first: defning the users model before taking action on it:
require('./models/User');

require('./services/passport');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [config.cookieKey]

    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

let PORT =  process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

