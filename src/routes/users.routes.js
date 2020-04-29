
/**
 * Users routes
 */

const { Router } = require('express');
const router = Router();

const { // routes functions
    renderSigninForm,
    signin,
    renderSignupForm,
    signup,
    logout
} = require('../controllers/users.controller');

// sign in
router.get('/signin', renderSigninForm);
router.post('/signin', signin);

// sign up
router.get('/signup', renderSignupForm);
router.post('/signup', signup);

// logout
router.get('/logout', logout);


module.exports = router;