'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.addColumn('claim_kesehatans', "nama", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "tgl_lahir", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "no_induk", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "satuan_kerja", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "golongan_pangkat", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "alamat", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "kelurahan", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "kecamatan", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "kota", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "kodepos", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "provinsi", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "no_telp", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "kota_pensiun", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "pasien", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "status_rawat", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "rumah_sakit", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "sakit", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "nama_dokter", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_kesehatans', "tgl_masuk", {
        type: Sequelize.STRING,
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn('claim_kesehatans', 'lampiran');
  }
};