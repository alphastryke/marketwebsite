var mysql = require('mysql');
var connection = mysql.createConnection({
    //host:'localhost',
    host:'mysqlinstance.cq2snvcscpox.us-east-1.rds.amazonaws.com',
    port:'3306',
    //user:'root',
    user:'admin',
    password:'jkcsawsdb',
    database:'marketsdb'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to DB');
});

module.exports = connection;