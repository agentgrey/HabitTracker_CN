// require express
const express = require('express');
const port = 8000;
const app = express();

const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

// used for session cookies
const session = require("express-session");
const passport = require('passport');
const passportLocal = require('./config/passport_local');





// layouts for ejs
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended:false}));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets')); 

//mongo store is used to store the session cookie
app.use(session({
    name: 'habitTracker',
    // TODO change the secret before deployment in production mode
    secret: "12345",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

// Using passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// use express router
app.use('/', require('./routes'));

// directing the app in the given port
app.listen(port, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log('Server is up and running on port: ', port);

});