const mysql = require('mysql');

/**
 * function to establish connection with the SQL database
 */
const initDBConnection = () => {
  if (process.env.JAWSDB_URL) {
    return mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'test',
      database: 'burgers_db'
    });
  }
};

const connection = initDBConnection();

connection.connect(function(err) {
  if (err) throw err;
  console.log('SQL DB Connected!');
});

module.exports = connection;
