var express = require("express");
var router = express.Router();
const { auth } = require("../middleware/auth");
const exampleControllers = require("../controllers/exampleControllers");
const authControllers = require("../controllers/authControllers");

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("hhe");
});

router.get("/example", exampleControllers.example);
router.post("/login", auth, authControllers.login);
router.get("/islogin", auth, authControllers.isLogin);

module.exports = router;
