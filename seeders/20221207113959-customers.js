"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "customers",
      [
        {
          name: "John",
          lastname: "Doe",
          id_card: "1234567D",
          phone: 123456789,
          email: "hola@hola.com",
        },
        {
          name: "John2",
          lastname: "Doe2",
          id_card: "1234567E",
          phone: 123456788,
          email: "adios@hola.com",
        },

        {
          name: "Estefania",
          lastname: "Calleja",
          id_card: "19899468Y",
          phone: 692340097,
          email: "estefania_08@blu.ita.com",
        },

        {
          name: "Marco",
          lastname: "Gomez",
          id_card: "41516368B",
          phone: 782204213,
          email: "marcoantonio_58@lycos.at",
        },

        {
          name: "Jose",
          lastname: "Chen",
          id_card: "38068730G",
          phone: 679752003,
          email: "josep_81@msn.com",
        },

        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
