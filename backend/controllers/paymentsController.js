const pool = require('../db');

exports.createPayment = async (req, res) => {
  const { order_id, user_id, amount, method, status, tx_hash } = req.body;
  if (!order_id || !user_id || !amount || !method) {
    return res.status(400).json({ message: '缺少必要参数' });
  }
  try {
    await pool.query(
      'INSERT INTO payments (order_id, user_id, amount, method, status, tx_hash) VALUES (?, ?, ?, ?, ?, ?)',
      [order_id, user_id, amount, method, status || 'pending', tx_hash || null]
    );
    res.json({ message: '支付记录创建成功' });
  } catch (err) {
    res.status(500).json({ message: '服务器错误' });
  }
};

exports.getPaymentsByUser = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const [rows] = await pool.query('SELECT * FROM payments WHERE user_id=?', [user_id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: '服务器错误' });
  }
}; 
