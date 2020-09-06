'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('claim_kesehatans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      surat_permohonan_bantuan_biaya: {
        type: Sequelize.STRING
      },
      kuitansi_asli_rs: {
        type: Sequelize.STRING
      },
      surat_keterangan_rs: {
        type: Sequelize.STRING
      },
      fotokopi_sk_pensiun: {
        type: Sequelize.STRING
      },
      fotokopi_kp: {
        type: Sequelize.STRING
      },
      no_rekening_bank: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('claim_kesehatans');
  }
};