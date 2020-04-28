/**
 * players routes
 */

const playersController = {};

const Player = require('../models/Player'); // my data model


playersController.renderNewForm = (req, res) => { 
    res.render('players/new-player'); // display form to a new player
}

playersController.newPlayer = async (req, res) => { 
    const {
        name,
        lastname,
        position,
        number,
        rating,
        image
    } = req.body; // taking values from request

    const newplayer = new Player({ // creating json to save
        name,
        lastname,
        position,
        number,
        rating,
        image
    });
    await newplayer.save(); // saving new player/json
    res.redirect('/players');
}

playersController.renderAllPlayers = async (req, res) => {
    const players = await Player.find(); // get all players from Player collection
    res.render('players/all-players', { players }); // render view and send players 
}

playersController.renderEditForm = (req, res) => {
    res.send('Render edit form');
}

playersController.updatePlayer = (req, res) => {
    res.send('Player updated');
}

playersController.deletePlayer = async (req, res) => {
    await Player.findOneAndDelete(req.params.id);
    res.redirect('/players');
}

module.exports = playersController;