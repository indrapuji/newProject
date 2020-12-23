'use strict';

const { hashPassword } = require('../helpers/bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      email: 'adminykp3js@jatisejahtera.or.id',
      password: hashPassword('adminykp3jssuper'),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
