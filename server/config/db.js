const mysql = require('mysql');


const db = mysql.createConnection({
  host: '35.192.31.149',
  user: 'root',
  password: 'admin',
  database: 'hack23'
});

/*
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});


db.end();
*/

module.exports = db;