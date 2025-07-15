const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');
/**
 * @swagger
 * tags:
 *   name: 收藏
 *   description: 收藏相关接口
 */

/**
 * @swagger
 * /api/favorites:
 *   post:
 *     summary: 添加收藏
 *     tags: [收藏]
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
 *               hotel_id: { type: integer }
 *               flight_id: { type: integer }
 *     responses:
 *       200:
 *         description: 收藏成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: { type: string }
 *       400:
 *         description: 参数错误
 */

/**
 * @swagger
 * /api/favorites:
 *   get:
 *     summary: 获取当前用户收藏列表
 *     tags: [收藏]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 收藏列表
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

/**
 * @swagger
 * /api/favorites/{id}:
 *   delete:
 *     summary: 删除收藏
 *     tags: [收藏]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *         description: 收藏ID
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
 *         description: 收藏不存在或无权限
 */
router.post('/', favoritesController.addFavorite);
router.get('/user/:user_id', favoritesController.getFavoritesByUser);

module.exports = router; 
