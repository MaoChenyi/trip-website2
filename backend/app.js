const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');
const commentsRouter = require('./routes/comments');
const favoritesRouter = require('./routes/favorites');
const setupSwagger = require('./swagger');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/favorites', favoritesRouter);

setupSwagger(app);

app.get('/', (req, res) => {
  res.send('Hotel Booking API Running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
