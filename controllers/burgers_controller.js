const express = require("express");
let router = express.Router();

// import .js file
let burger = require("../models/burger.js");

// Routes:

// Route 1: GET
router.get("/", function (req, res) {
    // This line of code retrieves all the burgers from the database.
    burger.all(function (data) {
        let hbsObject = {
            burger: data
        };
        // Testing variable hbsObject
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Route 2: POST
router.post("/api/burger", function (req, res) {
    // This route will allow the user to add a burger.

    // testing req.body.burger_name
    console.log(req.body.burger_name);

    burger.create(["burger_name"], [req.body.burger_name], function result(result) {
        res.json({
            id: result.insertId
        });
    });
});

// Route 3: UPDATE
router.put("/api/burger/:id", function(req, res) {
    // This route will allow the user to devour the burger for the on-click function.

    let condition = "id = " + req.params.id;

    // Testing the following conditions
    console.log("condition", condition);
    console.log(req.body.devoured);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows === 0) {
            // if the result from the changed rows is equal to 0 throw an HTTP response status code of 404 (Client error).
            return res.status(404).end();
        } else {
            // Relay successful response.
            res.status(200).end();
        }
    });
});

// export object
module.exports = router;