const express = require('express');
const burgers = require('../models/burger');
const router = express.Router();

router.get('/', (req, res) => {
  burgers.selectAll(data => {
    res.render('index', {
      title: 'Burgers Page',
      data
    });
  });
});

router.post('/api/burgers', (req, res) => {
  burgers.insertOne(['burger_name'], [req.body.burger_name], data => {
    console.log(data);
    res.redirect('/');
  });
});

router.put('/api/burgers/:id', (req, res) => {
  burgers.updateOne({ devoured: 1 }, 'id = ' + req.params.id, data => {
    if (data.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    // reponse good, row changed
    res.status(200).end();
  });
});

router.delete('/api/burgers/:id', (req, res) => {
  burgers.deleteOne('id = ' + req.params.id, data => {
    if (data.affectedRows === 0) {
      // If no rows were affected, then the ID must not exist, so 404
      return res.status(404).end();
    }
    // reponse good, row changed
    res.status(200).end();
  });
});

module.exports = router;
