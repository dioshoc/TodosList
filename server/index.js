const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const {json, urlencoded} = require("express");
require('dotenv').config();

app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));
app.use('/', routes);

app.use((err, req, res) => {
    const status = err.status || 500;
    req.setHeader('Content-Type', 'application/json');
    req.status(status).send('Ошибка сервера');
});

app.listen(process.env.NODE_PORT, () => {
    console.log('Сервер запущен на порту ' + process.env.NODE_PORT);
});

