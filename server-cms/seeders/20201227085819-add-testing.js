'use strict';

const { hashPassword } = require('../helpers/bcrypt');

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_anggota', [{
      nama: "testing",
      password: hashPassword("testing"),
      no_induk: "123456789",
      email: "test@test.com",
      tgl_lahir: "01/01/1901",
      no_ktp: "123456",
      no_bpjs: "1234567",
      nama_bank: "BCA",
      no_rekening: "123456789",
      satuan_kerja: "TEST SATUAN KERJA",
      golongan_pangkat: "I",
      no_telp: "0812345",
      alamat: "Jakarta Selatan",
      kelurahan: "-",
      kecamatan: "Test",
      kota: "Jakarta",
      kodepos: "12345",
      provinsi: "Jakarta",
      nama_pasangan: "Test Istri",
      tgl_lahir_pasangan: "11/11/2011",
      no_telp_pasangan: "08321321321",
      no_ktp_pasangan: "4375684912",
      no_bpjs_pasangan: "34216789",
      nama_bank_pasangan: "BTPN",
      no_rekening_pasangan: "54762398657289",
      nama_anak: '-',
      tgl_lahir_anak: "-",
      no_tlp_anak: "-",
      no_ktp_anak: "-",
      no_bpjs_anak: "-",
      nama_bank_anak: "-",
      no_rekening_anak: "-",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('user_anggota', null, {});
  }
};