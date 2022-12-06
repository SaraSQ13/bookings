const router = require("express").Router();
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/customers");

router.use("/", indexRouter);
router.use("/customers", usersRouter);

module.exports = router;
