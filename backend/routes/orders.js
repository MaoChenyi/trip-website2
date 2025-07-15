const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.post('/', ordersController.createOrder);
router.get('/user/:user_id', ordersController.getOrdersByUser);

module.exports = router; 
