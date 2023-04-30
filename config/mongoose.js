const mongoose = require('mongoose');

// storing the db on mongo atlas
const DB = "mongodb+srv://himadrinayak:12345@cluster0.h7n86ah.mongodb.net/habit-tracker?retryWrites=true&w=majority";

// mongoose.connect('mongodb://127.0.0.1/habit_tracker');

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;