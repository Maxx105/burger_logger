var mysql = require("mysql");

var jawsDBHost = "d1kb8x1fu8rhcnej.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
var jawsDBUser = "t1jfthwc2450mfig";
var jawsDBPassword = "n7axlzl90ns1b9hz";
var jawsDBDatabase = "rw3id7ay13li50x6";

var connection = mysql.createConnection({
  host: "localhost" || jawsDBHost,
  port: 3306,
  user: "root" || jawsDBUser,
  password: "password" || jawsDBPassword,
  database: "burgers_db" || jawsDBDatabase
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;