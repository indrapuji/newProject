'use strict';

const { hashPassword } = require('../helpers/bcrypt');

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_admins', [{
      nama: 'Super Admin',
      email: 'superadmin@superadmin.com',
      password: hashPassword('superadmin'),
      status: '007',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_admins', null, {});
  }
};