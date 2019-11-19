const initDBConnection = require("../config/connection");

const connection = initDBConnection();

const printQuestionMarks = num => {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = ob => {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
};

const selectAll = (table, func) => {
  connection.query(`SELECT * FROM ${table}`, (err, res) => {
    if (err) {
      throw err;
    }
    func(res);
  });
};

const insertOne = (table, columns, values, func) => {
  connection.query(
    `INSERT INTO ${table} (${columns.toString()}) VALUES (${printQuestionMarks(
      values.length
    )})`,
    values,
    function(err, res) {
      if (err) throw err;
      func(res);
    }
  );
};

const updateOne = (table, colValPairs, condition, func) => {
  connection.query(
    `UPDATE ${table} SET ${objToSql(colValPairs)} WHERE ${condition}`,
    function(err, res) {
      if (err) throw err;
      func(res);
    }
  );
};

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne
};
