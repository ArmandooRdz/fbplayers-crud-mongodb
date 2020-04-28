
const { Router } = require('express');
const router = Router();

const {renderPlayerForm, newPlayer, renderPlayers, 
    renderEditForm, updatePlayer, deletePlayer} = require('../controllers/players.controllers');

// new player
router.get('/players/add', renderPlayerForm); // return form
router.post('/players/add', newPlayer); // create

// all players
router.get('/players', renderPlayers); // read

// edit/update players
router.get('/players/edit/:id', renderEditForm); // return form
router.put('/players/edit/:id', updatePlayer); // update

// delete players
router.delete('/players/delete/:id', deletePlayer);

module.exports = router;