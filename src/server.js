/**
 * Server file
 */

const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

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
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(session({ // to save alert messages on server
    secret: 'sessionsecretarmando',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());



// global variables
app.use((req, res, next) => { 
    // saving alerts/messages on server variables
    res.locals.success_msg = req.flash('success_msg'); 
    res.locals.error_msg = req.flash('error_msg'); 
    next();
});


// routes config file
app.use(require('./routes/index.routes')); 
app.use(require('./routes/players.routes')); 
app.use(require('./routes/users.routes')); 

// public/static files 
app.use(express.static(path.join(__dirname, 'public')))



module.exports = app;
