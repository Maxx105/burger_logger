var mysql = require("mysql");
var connection;

var jawsDBHost = "d1kb8x1fu8rhcnej.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
var jawsDBUser = "t1jfthwc2450mfig";
var jawsDBPassword = "n7axlzl90ns1b9hz";
var jawsDBDatabase = "rw3id7ay13li50x6";

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  // console.log("connected as id " + connection.threadId);
});

module.exports = connection;