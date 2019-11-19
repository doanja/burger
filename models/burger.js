const orm = require("../config/orm");

const selectAll = func => {
  orm.selectAll("burgers", res => {
    func(res);
  });
};

const insertOne = (columns, values, func) => {
  orm.insertOne("burgers", columns, values, res => {
    func(res);
  });
};

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
