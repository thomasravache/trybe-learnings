// const mysql = require('mysql2/promise');
import mysql from 'mysql2/promise';
import { config } from 'dotenv';
config(); // carregando variáveis de ambiente

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: 'root',
  password: 'password',
  database: process.env.MYSQL_DB_NAME,
});

// module.exports = connection;

export default connection;
