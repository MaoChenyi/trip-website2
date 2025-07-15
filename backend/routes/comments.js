const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
/**
 * @swagger
 * tags:
 *   name: 评论
 *   description: 评论相关接口
 */

/**
 * @swagger
 * /api/comments:
 *   post:
 *     summary: 添加评论
 *     tags: [评论]
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
 *               content: { type: string }
 *               rating: { type: number }
 *     responses:
 *       200:
 *         description: 评论成功
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
 * /api/comments/hotel/{hotel_id}:
 *   get:
 *     summary: 获取酒店评论列表
 *     tags: [评论]
 *     parameters:
 *       - in: path
 *         name: hotel_id
 *         required: true
 *         schema: { type: integer }
 *         description: 酒店ID
 *     responses:
 *       200:
 *         description: 评论列表
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.post('/', commentsController.addComment);
router.get('/hotel/:hotel_id', commentsController.getCommentsByHotel);

module.exports = router; 
