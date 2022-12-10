'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('bookings', 
      [
        {
        checkin: '2022-10-01',
        checkout:'2022-10-08',
        id_customer: '2' ,
        id_hotel: '4'
      },

        {
        checkin: '2022-07-01',
        checkout:'2022-07-15',
        id_customer: '3' ,
        id_hotel: '1'
      },

        {
        checkin: '2023-03-30',
        checkout:'2023-04-08',
        id_customer: '1' ,
        id_hotel: '1'
      },

        {
        checkin: '2022-08-15',
        checkout:'2022-08-30',
        id_customer: '4' ,
        id_hotel: '3'
      },

        {
        checkin: '2022-06-07',
        checkout:'2022-06-20',
        id_customer: '5' ,
        id_hotel: '5'
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
