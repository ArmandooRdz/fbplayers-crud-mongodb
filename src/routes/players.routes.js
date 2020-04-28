
const { Router } = require('express');
const router = Router();

const {
    renderNewForm, newPlayer, renderAllPlayers, 
    renderEditForm, updatePlayer, deletePlayer
} = require('../controllers/players.controllers');

// new player
router.get('/players/add', renderNewForm); // return form
router.post('/players/add', newPlayer); // create

// all players
router.get('/players', renderAllPlayers); // read

// edit/update players
router.get('/players/edit/:id', renderEditForm); // return form
router.put('/players/edit/:id', updatePlayer); // update

// delete players
router.delete('/players/delete/:id', deletePlayer);

module.exports = router;