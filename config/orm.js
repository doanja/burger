const initDBConnection = require("../config/connection");

const connection = initDBConnection();

const selectAll = () => {
  console.log("selectAll() called in orm.js");
  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM burgers ORDER BY id", function(err, result) {
    if (err) throw err;
    // We then begin building out HTML elements for the page.
    var html = "<h1> Burgers </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Burger Name: " + result[i].burger_name + " </p>";
      html += "<p>Devoured: " + result[i].devoured + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
};

const insertOne = burger_name => {
  console.log("insertOne() called in orm.js");

  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query(
    "INSERT INTO burgers (burger_name) VALUES (?);",
    [burger_name],
    function(err, result) {
      if (err) throw err;
      // We then begin building out HTML elements for the page.
      var html = "<h1> Burgers </h1>";

      // Here we begin an unordered list.
      html += "<ul>";

      // We then use the retrieved records from the database to populate our HTML file.
      for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p>Burger Name: " + result[i].burger_name + " </p>";
        html += "<p>Devoured: " + result[i].devoured + " </p></li>";
      }

      // We close our unordered list.
      html += "</ul>";

      // Finally we send the user the HTML file we dynamically created.
      res.send(html);
    }
  );
};

const updateOne = (burger_name, id) => {
  console.log("updateOne() called in orm.js");

  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query(
    "UPDATE burgers SET burger_name = ? WHERE ?",
    [{ burger_name: burger_name }, { id: id }][burger_name],
    function(err, result) {
      if (err) throw err;
      // We then begin building out HTML elements for the page.
      var html = "<h1> Burgers </h1>";

      // Here we begin an unordered list.
      html += "<ul>";

      // We then use the retrieved records from the database to populate our HTML file.
      for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p>Burger Name: " + result[i].burger_name + " </p>";
        html += "<p>Devoured: " + result[i].devoured + " </p></li>";
      }

      // We close our unordered list.
      html += "</ul>";

      // Finally we send the user the HTML file we dynamically created.
      res.send(html);
    }
  );
};

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne
};
