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
    req.flash('success_msg', 'Football player added succesfully'); // creating succesfull alert 
    res.redirect('/players');
}

playersController.renderAllPlayers = async (req, res) => {
    const players = await Player.find(); // get all players from Player collection
    res.render('players/all-players', { players }); // render view and send players 
}

playersController.renderEditForm = async (req, res) => {
    const player = await Player.findById(req.params.id); // query by id 
    res.render('players/edit-player', { player }); // sending player to form
}

playersController.updatePlayer = async (req, res) => {
    const { name, lastname, position, number, rating, image } = req.body; // extracting request values
    await Player.findByIdAndUpdate(req.params.id, {name, lastname, position, number, rating, image}); // updating player
    req.flash('success_msg', 'Football player updated succesfully'); // creating succesfull alert 
    res.redirect('/players'); 
}

playersController.deletePlayer = async (req, res) => {
    await Player.findOneAndDelete(req.params.id);
    req.flash('success_msg', 'Football player deleted succesfully'); // creating succesfull alert 
    res.redirect('/players');
}

module.exports = playersController;