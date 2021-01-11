'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.addColumn('claim_kematians', "nama", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "tgl_lahir", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "no_induk", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "satuan_kerja", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "golongan_pangkat", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "alamat", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "kelurahan", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "kecamatan", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "kota", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "kodepos", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "provinsi", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "no_telp", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "kota_pensiun", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "nama_alm", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kematians', "tgl_meninggal", {
        type: Sequelize.STRING,
      }),

    ])
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn('claim_kematians', 'lampiran');
  }
};