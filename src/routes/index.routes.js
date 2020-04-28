/**
 * Setting app routes
 */

const { Router } = require('express');
const router = Router();
// importing routes functions (from controllers/index.controller)
const {renderIndex, renderAbout, renderMe} = require('../controllers/index.controller');

app.get('/', renderIndex);

app.get('/me', renderMe);

app.get('/about', renderAbout);

module.exports = router;