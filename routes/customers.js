var express = require("express");
var router = express.Router();
const customersController = require("../controllers/customers-controller");

/* GET users listing. */
router.get("/", customersController.findAll);
router.get("/:id", customersController.findByPk);

module.exports = router;
