const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing (needed to process POST request)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes
app.use("/", require("./controllers/burgers_controller"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
