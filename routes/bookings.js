var express = require("express");
var router = express.Router();
const bookingsController = require("../controllers/bookings-controller");

/* GET users listing. */
router.get("/", bookingsController.findAll);
router.get("/:id", bookingsController.findByPk);

module.exports = router;