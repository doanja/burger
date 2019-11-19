const initDBConnection = require("../config/connection");

const connection = initDBConnection();

const selectAll = () => {
  console.log("selectAll");
};

const insertOne = () => {
  console.log("insertOne");
};

const updateOne = () => {
  console.log(updateOne);
};

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne
};
