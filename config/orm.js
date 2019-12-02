const initDBConnection = require('../config/connection');
const connection = initDBConnection();

/**
 * helper function for SQL syntax.
 * @param {number} num a number to print num amount of question marks
 * @return {string} a string of question marks seperated by commas
 */
const printQuestionMarks = num => {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
};

/**
 * Helper function to convert object key/value pairs to SQL syntax
 * @param {object} obj the object
 * @return {string} a string representation of the object e.g. {sleepy: true} => ["sleepy=true"]
 */
const objToSql = obj => {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in obj) {
    var value = obj[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(obj, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + '=' + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
};

/**
 * function to query all from specified table
 * @param {string} table the table name
 * @param {function} func the callback function
 * @return void
 */
const selectAll = (table, func) => {
  connection.query(`SELECT * FROM ${table}`, (err, res) => {
    if (err) {
      throw err;
    }
    func(res);
  });
};

/**
 * function to insert one row
 * @param {string} table the table name
 * @param {array} columns the array of column names
 * @param {array} values the values to be inserted
 * @param {function} func the callback function
 * @return void
 */
const insertOne = (table, columns, values, func) => {
  connection.query(
    `INSERT INTO ${table} (${columns.toString()}) VALUES (${printQuestionMarks(values.length)})`,
    values,
    function(err, res) {
      if (err) throw err;
      func(res);
    }
  );
};

/**
 * function to updated one row
 * @param {string} table the table name
 * @param {object} colValPairs the object containg key (column name) and value (value)
 * @param {string} condition the condition
 * @param {function} func the callback function
 * @return void
 */
const updateOne = (table, colValPairs, condition, func) => {
  connection.query(`UPDATE ${table} SET ${objToSql(colValPairs)} WHERE ${condition}`, function(
    err,
    res
  ) {
    if (err) throw err;
    func(res);
  });
};

/**
 * function to delete one row
 * @param {string} table the table name
 * @param {string} condition the condition
 * @param {function} func the callback function
 * @return void
 */
const deleteOne = (table, condition, func) => {
  connection.query(`DELETE FROM ${table} WHERE ${condition}`, function(err, res) {
    if (err) throw err;
    func(res);
  });
};

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne,
  deleteOne: deleteOne
};
