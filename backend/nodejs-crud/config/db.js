const mysql = require('mysql');

const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "puytutor_db",
    timezone: 'utc'
});

module.exports = conn ;