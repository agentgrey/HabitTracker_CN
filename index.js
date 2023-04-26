// require express
const express = require('express');
const port = 8000;
const app = express();

const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');


// layouts for ejs
app.use(expressLayouts);
app.use(bodyParser.urlencoded());

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets')); 

// use express router
app.use('/', require('./routes/index'));

app.listen(port, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }

    console.log('Server is up and running on port: ', port);

});