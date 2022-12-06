const { hotel } = require("../models/index");

const hotelController = {};

hotelController.findAll = (req, res) => {
  hotel.findAll().then((data) => {
    res.send(data);
  });
};

hotelController.findByPk = (req, res, next)=>{
  const id = req.params.id;
  hotel.findByPk(id).then((data)=>{
    res.send(data);
  });
};


module.exports = hotelController;