const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');
/**
 * @swagger
 * tags:
 *   name: 支付
 *   description: 支付相关接口
 */

/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: 创建支付记录
 *     tags: [支付]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order_id: { type: integer }
 *               user_id: { type: integer }
 *               amount: { type: number }
 *               method: { type: string }
 *               tx_hash: { type: string }
 *     responses:
 *       200:
 *         description: 支付成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: { type: string }
 *       400:
 *         description: 参数错误
 */
router.post('/', paymentsController.createPayment);
router.get('/user/:user_id', paymentsController.getPaymentsByUser);

module.exports = router; 
