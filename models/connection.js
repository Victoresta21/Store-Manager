const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'Victor',
  password: 'victorlindo',
});

module.exports = connection; 