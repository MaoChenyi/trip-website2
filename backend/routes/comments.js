const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

router.post('/', commentsController.addComment);
router.get('/hotel/:hotel_id', commentsController.getCommentsByHotel);

module.exports = router; 
