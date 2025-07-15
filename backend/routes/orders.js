const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');
/**
 * @swagger
 * tags:
 *   name: 订单
 *   description: 订单相关接口
 */

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: 创建订单
 *     tags: [订单]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id: { type: integer }
 *               type: { type: string, enum: [hotel, flight] }
 *               item_id: { type: integer }
 *               check_in: { type: string, format: date }
 *               check_out: { type: string, format: date }
 *               flight_date: { type: string, format: date }
 *               guests: { type: integer }
 *               total_price: { type: number }
 *               payment_method: { type: string }
 *     responses:
 *       200:
 *         description: 订单创建成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order_id: { type: integer }
 *                 message: { type: string }
 *       400:
 *         description: 参数错误
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: 获取当前用户订单列表
 *     tags: [订单]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 订单列表
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       401:
 *         description: 未授权
 */

/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: 删除订单
 *     tags: [订单]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *         description: 订单ID
 *     responses:
 *       200:
 *         description: 删除成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: { type: string }
 *       404:
 *         description: 订单不存在或无权限
 */
router.post('/', ordersController.createOrder);
router.get('/user/:user_id', ordersController.getOrdersByUser);

module.exports = router; 
