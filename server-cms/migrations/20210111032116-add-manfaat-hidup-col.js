'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.addColumn('claim_nilai_hidups', "nama", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_nilai_hidups', "tgl_lahir", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_nilai_hidups', "no_induk", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_nilai_hidups', "satuan_kerja", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_nilai_hidups', "golongan_pangkat", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_nilai_hidups', "alamat", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_nilai_hidups', "kelurahan", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_nilai_hidups', "kecamatan", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_nilai_hidups', "kota", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_nilai_hidups', "kodepos", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_nilai_hidups', "provinsi", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_nilai_hidups', "no_telp", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('claim_nilai_hidups', "kota_pensiun", {
        type: Sequelize.STRING,
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn('claim_nilai_hidups', 'lampiran');
  }
};