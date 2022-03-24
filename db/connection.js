const mysql = require('mysql2'); // when using a db you have to pull in the connection to the db

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

module.exports = db;