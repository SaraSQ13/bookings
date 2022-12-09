var express = require("express");
var router = express.Router();
const customersController = require("../controllers/customers-controller");

/* GET customers listing. */
router.get("/", customersController.getAll);

/* GET customers by id. */
router.get("/:id", customersController.getById);

/* GET customers by name. */
router.get("/name/:name", customersController.getByName);

/* GET customers by lastname. */
router.get("/lastname/:lastname", customersController.getByLastname);

/* GET customers by id card. */
router.get("/id_card/:id_card", customersController.getByIdCard);

/* GET customers by phone. */
router.get("/phone/:phone", customersController.getByPhone);

/* GET customers by email. */
router.get("/email/:email", customersController.getByEmail);


module.exports = router;
