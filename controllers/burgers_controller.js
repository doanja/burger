const express = require("express");
const burgers = require("../models/burger");
const router = express.Router();

router.get("/", function(req, res) {
  //   return res.send("hello world");
  res.render("index", { data: "im hungry for veggie grill" });
});

module.exports = router;
