const { bookings, customers, hotel } = require("../models.js");
const { Op } = require("sequelize");

const bookingsController = {};

bookingsController.getAll = async (req, res)=>{
  try {
    const data = await bookings.findAll();
    res.json(data);
    }catch(error){
    res.status(500).send({
      message: "Some error ocurred while retrieving bookings.",
      
  });
  };
};

bookingsController.getById = async (req, res) => {
   const id = req.params.id;

   try {
      const data = await bookings.findByPk(id);

      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `Cannot find hotel with id=${id}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Error retreiving hotel retrieving with id=${id}.`,
      });
   }
};

bookingsController.getByCheckin = async (req, res) => {
   const checkin = req.params.checkin;
   try {
      const data = await hotel.findAll();

      if(data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `Cannot find bookings with checkin=${checkin}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Error retreiving bookings retrieving with checkin=${checkin}.`,
      });
   }
};


bookingsController.getByCheckout = async (req, res) => {
   const checkout = req.params.checkout;
   try {
      const data = await bookings.findAll();

      if(data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `Cannot find bookings with checkout=${checkout}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Error retreiving bookings retrieving with checkout=${checkout}.`,
      });
   }
};



module.exports = bookingsController;