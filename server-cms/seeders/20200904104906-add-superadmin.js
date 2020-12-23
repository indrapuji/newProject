'use strict';

const { hashPassword } = require('../helpers/bcrypt');

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_admins', [{
      nama: 'Staff',
      email: 'staf@staf.com',
      password: hashPassword('123456'),
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Sekretaris',
      email: 'sekretaris@sekretaris.com',
      password: hashPassword('123456'),
      status: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Pimpinan',
      email: 'pimpinan@pimpinan.com',
      password: hashPassword('123456'),
      status: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Finance',
      email: 'finance@finance.com',
      password: hashPassword('123456'),
      status: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Super Admin',
      email: 'adminykp3js@jatisejahtera.or.id',
      password: hashPassword('adminykp3jssuper'),
      status: '007',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_admins', null, {});
  }
};