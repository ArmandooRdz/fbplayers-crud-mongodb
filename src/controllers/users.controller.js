
const UserController = {};

const User = require('../models/User'); // User data model 
const passport = require('passport');

UserController.renderSignupForm = (req, res) => {
    res.render('users/signup');
}

UserController.signup = async (req, res) => {
    const errors = [];

    const { name, email, pass, passconfirm } = req.body;

    // validations
    if(pass.trim() != passconfirm.trim()){
        errors.push({text: 'Passwords do not match'});
    }
    if(pass.length < 5){
        errors.push({text: 'Passwords are insecure'});
    }
    if(name.match(/(\d+)/)){
        errors.push({text: 'Invalid name'});
    }
    if(errors.length > 0){ // if we have a error
        res.render('users/signup', {
            errors, // return errors
            name, // return values
            email,
            pass,
            passconfirm
        });
    }else{
        const emailUser = await User.findOne({email: email}); // check if email is already in use
        if(emailUser){ // email is already registered
            req.flash('error_msg', 'Email is already registered');
            res.redirect('/signup');
        }else{ // all correct
            const newUsr = new User({name: name, email: email, password: pass});
            newUsr.password = await newUsr.encryptPass(pass); // encrypt password
            await newUsr.save();
            req.flash('success_msg', 'Account registered succesfully');
            res.redirect('/signin');
        }
    }
}

UserController.renderSigninForm = (req, res) => { // login form
    res.render('users/signin');
}

UserController.signin = passport.authenticate('local', { // login
    failureRedirect: '/signin', // in error case
    successRedirect: '/players', // in success caso
    failureFlash: true // in error case use flash alert/messages
});


UserController.logout = (req, res) => {
    req.logout(); // passport delete the current session
    req.flash('success_msg', 'Logged out succesfull');
    res.redirect('/signin');
}

module.exports = UserController;