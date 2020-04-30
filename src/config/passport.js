
/**
 * Passport config
 */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // to use local login

const User = require('../models/User');

passport.use(new LocalStrategy({  // using local login of passport library
    usernameField: 'email', // set my form email field
    passwordField: 'password' // set my form password field
}, async (email, pass, done) => {

    // check if email exists
    const user = await User.findOne({email}) // return user object

    if(!user){ // email not exists
        // return with error message/alert
        return done(null, false, { message: 'Not email found' }); 

    }else{ // email exists

        // compare passwords
        const correctPass = await user.checkPass(pass); // true or false
        
        if(correctPass){ // matching passwords
            return done(null, user); // return with user founded
        }else{
            return done(null, false, {message: 'Incorrect password'});
        }
    }
}));

/** creating session variables */
passport.serializeUser((user, done) => { // execute when user sign in
    done(null, user.id); // save user id like session variable
});

/** to validate user while navigate in our page */
passport.deserializeUser((id, done) => { 
    console.log('deserializeUser()');
    User.findById(id, (err, user) => { // db query to validate user
        done(err, user); 
    });
});