'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('claim_kematians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      pesan_claim_id: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      permohonan_ahli_waris: {
        type: Sequelize.STRING
      },
      keterangan_menginggal_dunia_lurah: {
        type: Sequelize.STRING
      },
      keterangan_meninggal_dunia_rumah_sakit: {
        type: Sequelize.STRING
      },
      keterangan_kepolisian: {
        type: Sequelize.STRING
      },
      fotokopi_kp: {
        type: Sequelize.STRING
      },
      fotokopi_kk: {
        type: Sequelize.STRING
      },
      fotokopi_sk_pengangkatan: {
        type: Sequelize.STRING
      },
      fotokopi_sk_pensiun: {
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
    await queryInterface.dropTable('claim_kematians');
  }
};