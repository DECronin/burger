const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var thisObject = {
        burgers: data
      };
      console.log(thisObject);
      res.render("index", thisObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", req.body.name, function(result) {
      res.redirect('/');
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne('devoured', 'true', condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  })

module.exports = router;