const orm = require("../config/orm");

/**
 * calls selectAll passing in a callback function
 * @param {function} func the callback function
 * @return void
 */
const selectAll = func => {
  orm.selectAll("burgers", res => {
    func(res);
  });
};

/**
 * calls insertOne passing in a callback function
 * @param {string} columns the SQL column names
 * @param {array} values the values to be inserted
 * @param {function} func the callback function
 * @return void
 */
const insertOne = (columns, values, func) => {
  orm.insertOne("burgers", columns, values, res => {
    func(res);
  });
};

/**
 * call updateOne passing in a callback function
 * @param {object} colValPairs the object containg key (column name) and value (value)
 * @param {string} condition the condition
 * @param {function} func the callback function
 * @return void
 */
const updateOne = (colValPairs, condition, func) => {
  orm.updateOne("burgers", colValPairs, condition, res => {
    func(res);
  });
};

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne
};
