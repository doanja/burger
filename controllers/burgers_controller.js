const express = require("express");
const burgers = require("../models/burger");
const router = express.Router();

router.get("/", (req, res) => {
  burgers.selectAll(data => {
    res.render("index", {
      title: "Burgers Page",
      data
    });
  });
});

// re-test this
router.post("/api/burgers", (req, res) => {
  // need check for body null on front end (maybe backend?)
  console.log("burger name: ", req.body);
  burgers.insertOne(["burger_name"], [req.body.burger_name], data => {
    console.log(data);
    res.json({ id: data.insertId });
  });
});

// change this to post
router.patch("/api/burgers/:id", (req, res) => {
  burgers.updateOne({ devoured: 1 }, "id = " + req.params.id, data => {
    if (data.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
