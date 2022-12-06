const { bookings } = require("../models/index");

const bookingsController = {};

bookingsController.findAll = (req, res) => {
  bookings.findAll().then((data) => {
    res.send(data);
  });
};

bookingsController.findByPk = (req, res, next)=>{
  const id = req.params.id;
  bookings.findByPk(id).then((data)=>{
    res.send(data);
  });
};


module.exports = bookingsController;