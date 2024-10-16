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
    await queryInterface.bulkInsert('users',[
        {
          name: "Janavi Kharat",
          role: "MANAGER",
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          name: "Lorry Dave",
          role: "USER",
          createdAt: new Date(),
          updatedAt: new Date() 
        },  
        {
          name: "Ova Lane",
          role: "USER",
          createdAt: new Date(),
          updatedAt: new Date() 
        },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
