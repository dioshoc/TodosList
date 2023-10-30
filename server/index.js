const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();
app.use(cors());
app.use('/', routes);
app.use(express.json());
app.use((err, req, res) => {
  console.log(res);
  req.status(err.status || 500);

  req.setHeader('Content-Type', 'application/json');

  req.json({ error: err.message || 'Ошибка сервера' });
});

app.listen(process.env.NODE_PORT, () => {
  console.log('Сервер запущен на порту ' + process.env.NODE_PORT);
});

