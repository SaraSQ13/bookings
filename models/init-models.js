var DataTypes = require("sequelize").DataTypes;
var _bookings = require("./bookings");
var _customers = require("./customers");
var _hotel = require("./hotel");

function initModels(sequelize) {
  var bookings = _bookings(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var hotel = _hotel(sequelize, DataTypes);

  bookings.belongsTo(customers, { as: "id_customer_customer", foreignKey: "id_customer"});
  customers.hasMany(bookings, { as: "bookings", foreignKey: "id_customer"});
  bookings.belongsTo(hotel, { as: "id_hotel_hotel", foreignKey: "id_hotel"});
  hotel.hasMany(bookings, { as: "bookings", foreignKey: "id_hotel"});

  return {
    bookings,
    customers,
    hotel,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
