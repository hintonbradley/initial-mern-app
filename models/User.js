const mongoose = require('mongoose');
const { Schema } = mongoose; 

const userSchema = new Schema({
    googleId: String,
    credits: {
        type: Number,
        default: 0
    }
})

// creating a new "users" collection in our database:
mongoose.model('users', userSchema);
