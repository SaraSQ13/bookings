var express = require("express");
var router = express.Router();
const hotelController = require("../controllers/hotel-controller");

/* GET hotel listing. */
router.get("/", hotelController.getAll);

/* GET hotel by id. */
router.get("/:id", hotelController.getById);

/* GET hotel by name. */
router.get("/name/:name", hotelController.getByName);

/* GET hotel by location. */
router.get("/location/:location", hotelController.getByLocation);


/* GET hotel by city. */
router.get("/city/:city", hotelController.getByCity);



module.exports = router;
