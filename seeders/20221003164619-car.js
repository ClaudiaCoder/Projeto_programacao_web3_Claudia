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
     queryInterface.bulkInsert('Cars', [
    {
        
    brand: 'Fiat',
    name: 'Pulse',
    model: 'drive 1.0 turbo 200 flex aut',
    year: 2022,
    collor: 'Azul amalfi',
    licensePlate: 'ABC1D23',
    price: 107700,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    
    brand: 'Fiat',
    name: 'Argo',
    model: 'Drive 1.0 6V Flex',
    year: 2023,
    collor: 'Preto',
    licensePlate: 'ACD1G24',
    price: 78181,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    
    brand: 'Fiat',
    name: 'Pulse',
    model: 'Impetus 1.0 Turbo 200 Flex Aut',
    year: 2023,
    collor: 'Preto',
    licensePlate: 'ACD1G24',
    price: 125333,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    
    brand: 'Fiat',
    name: 'Pulse',
    model: 'Audace 1.0 Turbo 200 Flex Aut',
    year: 2023,
    collor: 'Braco bachisa',
    licensePlate: 'ACE7G24',
    price: 114422,
    createdAt: new Date(),
    updatedAt: new Date()
      }    
    ]);
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     queryInterface.bulkDelete('Users', null, {})
  }
};
