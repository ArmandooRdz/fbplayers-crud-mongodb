
const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

UserSchema.methods.encryptPass = async password => { // creating "encryptPass" method to encrypt users passwords
    const salt = await bcrypt.genSalt(10); // generating hash salt 10 times | async await
    return await bcrypt.hash(password, salt); // returning encrypted password 
}

UserSchema.method.checkPass = function(password) { // to validate/compare users passwords (to login)
    return await bcrypt.compare(password, this.password); // return true or false 
}

module.exports = model('User', UserSchema);