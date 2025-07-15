const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');
const commentsRouter = require('./routes/comments');
const favoritesRouter = require('./routes/favorites');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/favorites', favoritesRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('Hotel Booking API 服务运行中');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`后端服务已启动，端口：${PORT}`);
}); 
