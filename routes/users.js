var express = require("express");
var router = express.Router();
const exampleControllers = require("../controllers/exampleControllers");

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("hhe");
});

router.get("/example", exampleControllers.example);

module.exports = router;
