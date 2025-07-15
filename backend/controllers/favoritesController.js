const pool = require('../db');

exports.addFavorite = async (req, res) => {
  const { user_id, hotel_id, flight_id } = req.body;
  if (!user_id || (!hotel_id && !flight_id)) {
    return res.status(400).json({ message: '缺少必要参数' });
  }
  try {
    await pool.query(
      'INSERT INTO favorites (user_id, hotel_id, flight_id) VALUES (?, ?, ?)',
      [user_id, hotel_id || null, flight_id || null]
    );
    res.json({ message: '收藏添加成功' });
  } catch (err) {
    res.status(500).json({ message: '服务器错误' });
  }
};

exports.getFavoritesByUser = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const [rows] = await pool.query('SELECT * FROM favorites WHERE user_id=?', [user_id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: '服务器错误' });
  }
}; 
