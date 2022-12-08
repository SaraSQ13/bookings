var express = require("express");
var router = express.Router();
const customersController = require("../controllers/customers-controller");

/* GET customers listing. */
router.get("/", customersController.getAll);


router.get("/:id", customersController.getById);
router.get("/name/:name", customersController.getByName);
router.get("/lastname/:lastname", customersController.getByLastname);
router.get("/id_card/:id_card", customersController.getByIdCard);
router.get("/phone/:phone", customersController.getByPhone);
router.get("/email/:email", customersController.getByEmail);


module.exports = router;
