const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'user'
});

connection.connect((err) => {
    if (err) {
        console.log(`Conection Fail..`);
    } else {
        console.log(`Conected MYSQL !!`);
    }
});

module.exports = connection