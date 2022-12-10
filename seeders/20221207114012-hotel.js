'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('hotel', 
      [
        {
        name: 'Wave Hotel',
        location: "calle del mar, 1", 
        city: "badalona",
        night_price: 100
      },

        {
        name: 'Ocean Hotel',
        location: "calle del oceano, 2", 
        city: "sant feliu de guixols",
        night_price: 80
      },

        {
        name: 'Mermaid Hotel',
        location: "calle de la sirenita, 7", 
        city: "sant feliu de guixols",
        night_price: 120
      },

        {
        name: 'Octopus Hotel',
        location: "carrer del pop, 20", 
        city: "blanes",
        night_price: 120
      },

        {
        name: 'Turtle Hotel',
        location: "calle de la tortuga, 13", 
        city: "badalona",
        night_price: 90
      },


    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
