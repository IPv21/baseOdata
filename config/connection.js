const mysql = require('mysql2');

  const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'rootr00t!',
    database: 'baseOdata'
});

db.connect(function(err) {
if (err) {
    console.error('Error connectiong to the database:', err);
    return;
}
    console.log('Connected to the database');

 
});
module.exports = db;