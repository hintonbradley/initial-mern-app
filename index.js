const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/keys');

// first: defning the users model before taking action on it:
require('./models/User');

require('./services/passport');

mongoose.connect(config.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

let PORT =  process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

