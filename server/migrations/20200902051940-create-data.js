'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      no_induk: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      tgl_lahir: {
        type: Sequelize.STRING
      },
      no_ktp: {
        type: Sequelize.STRING
      },
      no_bpjs: {
        type: Sequelize.STRING
      },
      nama_bank: {
        type: Sequelize.STRING
      },
      no_rekening: {
        type: Sequelize.STRING
      },
      satuan_kerja: {
        type: Sequelize.STRING
      },
      golongan_pangkat: {
        type: Sequelize.STRING
      },
      no_telp: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      kelurahan: {
        type: Sequelize.STRING
      },
      kecamatan: {
        type: Sequelize.STRING
      },
      kota: {
        type: Sequelize.STRING
      },
      kodepos: {
        type: Sequelize.STRING
      },
      provinsi: {
        type: Sequelize.STRING
      },
      nama_pasangan: {
        type: Sequelize.STRING
      },
      tgl_lahir_pasangan: {
        type: Sequelize.STRING
      },
      no_telp_pasangan: {
        type: Sequelize.STRING
      },
      no_ktp_pasangan: {
        type: Sequelize.STRING
      },
      no_bpjs_pasangan: {
        type: Sequelize.STRING
      },
      nama_bank_pasangan: {
        type: Sequelize.STRING
      },
      no_rekening_pasangan: {
        type: Sequelize.STRING
      },
      nama_anak: {
        type: Sequelize.STRING
      },
      tgl_lahir_anak: {
        type: Sequelize.STRING
      },
      no_tlp_anak: {
        type: Sequelize.STRING
      },
      no_ktp_anak: {
        type: Sequelize.STRING
      },
      no_bpjs_anak: {
        type: Sequelize.STRING
      },
      nama_bank_anak: {
        type: Sequelize.STRING
      },
      no_rekening_anak: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Data');
  }
};