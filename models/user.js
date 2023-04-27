const mongoose = require('mongoose');

// create a user schema
// userSchema consist of the name, email and passowrd. 
// a user can have multiple habits
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const User = mongoose.model("User" , userSchema);
module.exports = User;