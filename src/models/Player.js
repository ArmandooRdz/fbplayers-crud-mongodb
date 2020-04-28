
const {Schema, model} = require('mongoose');

const PlayersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type:  String,
        required: true,
    },
    position: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
}, {
    timestamps: true // to add "created at" and "updated at" values
})

model.exports = model('Player', PlayersSchema);