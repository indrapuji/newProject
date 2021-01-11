'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.addColumn('claim_pendidikans', "nama", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_pendidikans', "tgl_lahir", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_pendidikans', "no_induk", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_pendidikans', "satuan_kerja", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_pendidikans', "golongan_pangkat", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_pendidikans', "alamat", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_pendidikans', "kelurahan", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_pendidikans', "kecamatan", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_pendidikans', "kota", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_pendidikans', "kodepos", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_pendidikans', "provinsi", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_pendidikans', "no_telp", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_pendidikans', "kota_pensiun", {
        type: Sequelize.STRING,
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn('claim_pendidikans', 'lampiran');
  }
};