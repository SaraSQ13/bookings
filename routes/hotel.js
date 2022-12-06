var express = require("express");
var router = express.Router();
const hotelController = require("../controllers/hotel-controller");

/* GET users listing. */
router.get("/", hotelController.findAll);
router.get("/:id", hotelController.findByPk);

module.exports = router;
