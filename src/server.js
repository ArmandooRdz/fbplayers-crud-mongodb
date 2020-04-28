/**
 * Server file
 */

const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');

// initalizations
app = express();

// config
app.set('port', process.env.PORT || 4000); // setting server port
app.set('views', path.join(__dirname, 'views')); // setting views folder
app.engine('.hbs', exhbs({ // setting handlebars engine
    defaultLayout: 'main', // default html code (like; head, footer, ...)
    layoutsDir: path.join(app.get('views'), 'layout'), // setting path to view folder
    partialsDir: path.join(app.get('views'), 'partials'), // setting path to partials folder
    extname: '.hbs' // setting extension name
}));
app.set('view engine', '.hbs');


// middlewars
app.use(express.urlencoded({extended: false}));


// global variables


// routes config file
app.use(require('./routes/index.routes')); 
app.use(require('./routes/players.routes')); 

// public/static files 
app.use(express.static(path.join(__dirname, 'public')))



module.exports = app;
