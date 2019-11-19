const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing (needed to process POST request)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
