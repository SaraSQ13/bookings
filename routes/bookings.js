var express = require("express");
var router = express.Router();
const bookingsController = require("../controllers/bookings-controller");

/* GET hotel listing. */
router.get("/", bookingsController.getAll);

/* GET hotel by id. */
router.get("/:id", bookingsController.getById);

/* GET hotel by name. */
router.get("/checkin/:checkin", bookingsController.getByCheckin);

/* GET hotel by location. */
router.get("/checkout/:checkout", bookingsController.getByCheckout);

module.exports = router;