const mysql = require("mysql");

/**
 * function to establish connection with the SQL database
 */
const initDBConnection = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "test",
    database: "burgers_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("SQL DB Connected!");
  });

  return connection;
};

module.exports = initDBConnection;
