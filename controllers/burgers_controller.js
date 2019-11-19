const express = require("express");
const burgers = require("../models/burger");
const router = express.Router();

router.get("/", (req, res) => {
  burgers.selectAll(data => {
    const obj = {
      burgers: data
    };
    console.log("obj:", obj);

    res.render("index", obj);
  });
});

// re-test this
router.post("/api/burgers", (req, res) => {
  burgers.insertOne(["burger_name"], ["Big Mac"], data => {
    console.log(data);
    res.json({ id: data });
  });
});

// change this to post
router.patch("/api/burgers/:id", (req, res) => {
  burgers.updateOne(
    { burger_name: "Veggie Burger" },
    "id = " + req.params.id,
    data => {
      res.json({ id: data });
    }
  );
});

module.exports = router;
