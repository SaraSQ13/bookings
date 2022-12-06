const { customers } = require("../models/index");

const customersController = {};

customersController.findAll = (req, res) => {
  customers.findAll().then((data) => {
    res.send(data);
  });
};

customersController.findByPk = (req, res, next)=>{
  const id = req.params.id;
  customers.findByPk(id).then((data)=>{
    res.send(data);
  });
};


module.exports = customersController;