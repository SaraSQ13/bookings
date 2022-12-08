'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


     await queryInterface.bulkInsert('customers', 
     [
      {
         name: 'John',
         lastname: 'Doe',
         id_card:'1234567D',
        phone: 123456789 ,
        email: 'hola@hola.com'
       },
      {
         name: 'John2',
         lastname: 'Doe2',
         id_card:'1234567E',
         phone: 123456788 ,
         email: 'adios@hola.com'
       },

      ],
       {}
    );
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
