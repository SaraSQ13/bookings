const { customers } = require("../models.js");

const customersController = {};


customersController.getAll = async (req, res)=>{
  try {
    const data = await customers.findAll();
    res.json(data);
    }catch(error){
    res.status(500).send({
      message: "Some error ocurred while retrieving users.",
      
  });
  };
};

customersController.getById = async (req, res) => {
   const id = req.params.id;

   try {
      const data = await customers.findByPk(id);

      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `Cannot find user with id=${id}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Error retreiving user retrieving with id=${id}.`,
      });
   }
};

customersController.getByName = async (req, res) => {
   const name = req.params.name;
   try {
      const data = await customers.findAll({
         where: { name: { [Op.like]: `%${name}%` } },
      });

      if(data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `Cannot find user with name=${name}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Error retreiving user retrieving with name=${name}.`,
      });
   }
};

customersController.getByLastname = async (req, res) => {
  const lastname = req.params.lastname;
  try {
     const data = await customers.findAll({
        where: { name: { [Op.like]: `%${lastname}%` } },
     });

     if(data) {
        res.json(data);
     } else {
        res.status(404).send({
           message: `Cannot find user with name=${lastname}`,
        });
     }
  } catch (error) {
     res.status(500).send({
        message: `Error retreiving user retrieving with name=${lastname}.`,
     });
  }
};
customersController.getByIdCard = async (req, res) => {
  const id_card = req.params.id_card;
  try {
     const data = await customers.findAll({
        where: { id_card: { [Op.like]: `%${id_card}%` } },
     });

     if(data) {
        res.json(data);
     } else {
        res.status(404).send({
           message: `Cannot find user with id card=${id_card}`,
        });
     }
  } catch (error) {
     res.status(500).send({
        message: `Error retreiving user retrieving with id card=${id_card}.`,
     });
  }
};
customersController.getByPhone = async (req, res) => {
  const phone = req.params.phone;
  try {
     const data = await customers.findAll({
        where: { phone: { [Op.like]: `%${phone}%` } },
     });

     if(data) {
        res.json(data);
     } else {
        res.status(404).send({
           message: `Cannot find user with phone=${phone}`,
        });
     }
  } catch (error) {
     res.status(500).send({
        message: `Error retreiving user retrieving with phone=${phone}.`,
     });
  }
};
customersController.getByEmail = async (req, res) => {
  const email = req.params.email;
  try {
     const data = await customers.findAll({
        where: { email: { [Op.like]: `%${email}%` } },
     });

     if(data) {
        res.json(data);
     } else {
        res.status(404).send({
           message: `Cannot find user with email=${email}`,
        });
     }
  } catch (error) {
     res.status(500).send({
        message: `Error retreiving user retrieving with email=${email}.`,
     });
  }
};

// AlumnoController.getByName = async (req, res) => {
//    const name = req.params.name;

//    try {
//       const data = await Alumno.findAll({
//          where: { name: { [Op.like]: `%${name}%` } },
//          include: [{ model: Nacionalidad, as: "id_nationality_nacionalidad" }],
//       });

//       if (data.length > 0) {
//          res.json(data);
//       } else {
//          res.status(404).send({
//             message: `Cannot find user with name=${name}`,
//          });
//       }
//    } catch (error) {
//       res.status(500).send({
//          message: `Error retreiving user retrieving with name=${name}.`,
//       });
//    }
// };


module.exports = customersController;



// AlumnoController.getById = async (req, res) => {
//    const id = req.params.id;

//    try {
//       const data = await Alumno.findByPk(id, {
//          include: [{ model: Nacionalidad, as: "id_nationality_nacionalidad" }],
//       });

//       if (data) {
//          res.json(data);
//       } else {
//          res.status(404).send({
//             message: `Cannot find user with id=${id}`,
//          });
//       }
//    } catch (error) {
//       res.status(500).send({
//          message: `Error retreiving user retrieving with id=${id}.`,
//       });
//    }
// };

// AlumnoController.getByName = async (req, res) => {
//    const name = req.params.name;

//    try {
//       const data = await Alumno.findAll({
//          where: { name: { [Op.like]: `%${name}%` } },
//          include: [{ model: Nacionalidad, as: "id_nationality_nacionalidad" }],
//       });

//       if (data.length > 0) {
//          res.json(data);
//       } else {
//          res.status(404).send({
//             message: `Cannot find user with name=${name}`,
//          });
//       }
//    } catch (error) {
//       res.status(500).send({
//          message: `Error retreiving user retrieving with name=${name}.`,
//       });
//    }
// };
// module.exports = AlumnoController;