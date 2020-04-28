/**
 * file to run app
 */

// to read system operating environment variables
// is used to mongo database connection
require('dotenv').config();

// requiere server
app = require('./server');

require('./db/database');

// define port
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});