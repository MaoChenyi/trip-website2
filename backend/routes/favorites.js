const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');

router.post('/', favoritesController.addFavorite);
router.get('/user/:user_id', favoritesController.getFavoritesByUser);

module.exports = router; 
