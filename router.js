const router = require("express").Router();
const indexRouter = require("./routes/index");
const customersRouter = require("./routes/customers");
const hotelRouter = require("./routes/hotel");
const bookingsRouter = require("./routes/bookings");

router.use("/", indexRouter);
router.use("/customers", customersRouter);
router.use("/hotel", hotelRouter);
router.use("/bookings", bookingsRouter);


module.exports = router;
