/**
 * players routes
 */

const playersController = {};

playersController.renderPlayerForm = (req, res) => { 
    res.render('players/new-player');
}

playersController.newPlayer = (req, res) => { 
    res.send('Player added');
}

playersController.renderPlayers = (req, res) => {
    res.send('Render all players');
}

playersController.renderEditForm = (req, res) => {
    res.send('Render edit form');
}

playersController.updatePlayer = (req, res) => {
    res.send('Player updated');
}

playersController.deletePlayer = (req, res) => {
    res.send('Player deleted');
}

module.exports = playersController;