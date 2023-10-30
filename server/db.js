const mysql = require('mysql2');
const { createPool } = require('mysql2');
require('dotenv').config();

const DB_CONFIG = {
  host: 'mysql-db',
  user: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306,
};

const connection = mysql.createConnection(DB_CONFIG);

connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
    return;
  }
  console.log('Успешное подключение к базе данных!');

  const createTableQuery = `
      CREATE TABLE IF NOT EXISTS tasks
      (
          id          INT AUTO_INCREMENT PRIMARY KEY,
          title       VARCHAR(255) NOT NULL,
          description TEXT,
          status      ENUM ( 'default', 'check', 'error' ) DEFAULT 'default',
          created_at  TIMESTAMP                            DEFAULT CURRENT_TIMESTAMP
      )
  `;

  connection.query(createTableQuery, (error, results, fields) => {
    if (error) {
      console.error('Ошибка при создании таблицы:', error);
    } else {
      console.log('Таблица "tasks" успешно создана или уже существует');
    }
  });
});

const pool = createPool(DB_CONFIG);

module.exports = connection;