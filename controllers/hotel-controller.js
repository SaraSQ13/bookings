const { hotel, bookings, customers } = require("../models.js");
const { Op } = require("sequelize");

const hotelController = {};


hotelController.getAll = async (req, res)=>{
  try {
    const data = await hotel.findAll();
    res.json(data);
    }catch(error){
    res.status(500).send({
      message: "Some error ocurred while retrieving hotels.",
      
  });
  };
};

hotelController.getById = async (req, res) => {
   const id = req.params.id;

   try {
      const data = await hotel.findByPk(id);

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

hotelController.getByName = async (req, res) => {
   const name = req.params.name;
   try {
      const data = await hotel.findAll();

      if(data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `Cannot find hotel with name=${name}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Error retreiving hotel retrieving with name=${name}.`,
      });
   }
};


hotelController.getByLocation = async (req, res) => {
   const location = req.params.location;
   try {
      const data = await hotel.findAll();

      if(data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `Cannot find hotel with location=${location}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Error retreiving hotel retrieving with location=${location}.`,
      });
   }
};


hotelController.getByCity = async (req, res) => {
   const city = req.params.city;
   try {
      const data = await hotel.findAll();

      if(data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `Cannot find hotel on city=${city}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Error retreiving hotel retrieving on city=${city}.`,
      });
   }
};



module.exports = hotelController;