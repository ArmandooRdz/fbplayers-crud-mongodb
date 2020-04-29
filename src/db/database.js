const mongoose = require('mongoose');


// get enviroment variables 
const {APP_HOST, APP_DATABASE } = process.env;
// define mongodb url database 
const MONGODB_URI = `mongodb://${APP_HOST}/${APP_DATABASE}`;

mongoose.connect(MONGODB_URI, { // database connection 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));