const pool = require('../db');

exports.addComment = async (req, res) => {
  const { user_id, hotel_id, content, rating } = req.body;
  if (!user_id || !hotel_id || !content) {
    return res.status(400).json({ message: '缺少必要参数' });
  }
  try {
    await pool.query(
      'INSERT INTO comments (user_id, hotel_id, content, rating) VALUES (?, ?, ?, ?)',
      [user_id, hotel_id, content, rating || null]
    );
    res.json({ message: '评论添加成功' });
  } catch (err) {
    res.status(500).json({ message: '服务器错误' });
  }
};

exports.getCommentsByHotel = async (req, res) => {
  const hotel_id = req.params.hotel_id;
  try {
    const [rows] = await pool.query('SELECT * FROM comments WHERE hotel_id=?', [hotel_id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: '服务器错误' });
  }
}; 
