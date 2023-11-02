const express = require('express');
const router = express.Router();
const connection = require('./db');


router.post('/addTask', (req, res) => {
  const { title, description, status } = req.body;
  const insertQuery = 'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)';
  const selectQuery = 'SELECT * FROM tasks WHERE id = ?';
  const values = [title, description, status];

  connection.query(insertQuery, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Ошибка сервера');
    } else {
      const insertedId = results.insertId;
      connection.query(selectQuery, [insertedId], (selectError, selectResults) => {
        if (selectError) {
          console.error(selectError);
          res.status(500).send('Ошибка сервера');
        } else {
          const newTask = selectResults[0];
          res.status(200).json(newTask);
        }
      });
    }
  });
});

router.patch('/editTask/:id', (req, res) => {
  const taskId = req.params.id;
  const { title, description } = req.body;

  const updateQuery = `
      UPDATE tasks
      SET title=?,
          description=?
      WHERE id = ?
  `;
  const selectQuery = 'SELECT * FROM tasks WHERE id = ?';

  connection.query(updateQuery, [title, description, taskId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Ошибка сервера');
    } else {
      connection.query(selectQuery, [taskId], (selectError, selectResults) => {
        if (selectError) {
          console.error(selectError);
          res.status(500).send('Ошибка сервера');
        } else {
          const updatedTask = selectResults[0];
          res.status(200).json(updatedTask);
        }
      });
    }
  });
});


router.delete('/removeTask/:id', (req, res) => {
  const taskId = req.params.id;
  const insertQuery = `
      DELETE
      FROM tasks
      WHERE id = ?
  `;
  connection.query(insertQuery, [taskId], (error, results) => {
    if (error) {
      console.error('Ошибка при удалении задачи:', error);
      res.status(500).json({ error: 'Возникла ошибка при удалении задачи' });
    } else {
      res.status(200).send({ status: 200, message: 'Задача успешно удалена' });
    }
  });
});


router.get('/tasks', (req, res) => {
  connection.query('SELECT * FROM tasks', (error, results) => {
    if (error) {
      res.status(500).send('Ошибка сервера');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;