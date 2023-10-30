const express = require('express');
const router = express.Router();
const connection = require('./db');

router.post('/addTask', (req, res) => {
  const task = req.body.task;
  console.log(task);

  const query = 'INSERT INTO tasks (task) VALUES (?)';

  connection.query(query, [task], (error, results) => {
    if (error) throw error;
    console.log('Задача добавлена в таблицу tasks');
    res.sendStatus(200);
  });
});


router.get('/tasks', (req, res) => {
  connection.query('SELECT * FROM tasks', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Ошибка сервера');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;