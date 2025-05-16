
const mysql = require('mysql2');
require('dotenv').config();


//===========CONNECTION===========

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'library',
});

db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
