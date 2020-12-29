'use strict';

const { hashPassword } = require('../helpers/bcrypt');

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_anggota', [{
      nama: "endang setyowati",
      password: hashPassword("19571102198908200"),
      no_induk: "19571102198908200",
      email: "-",
      tgl_lahir: "11/2/1957",
      no_ktp: "3671124211570001",
      no_bpjs: "0002518011911",
      nama_bank: "BRI",
      no_rekening: "711101005121500",
      satuan_kerja: "KANTOR PUSAT PERUM PERHUTANI",
      golongan_pangkat: "IV",
      no_telp: "0817767874",
      alamat: "KOMP. KEHUTANAN JL. WANAMULYA 14 NO. 3 RT/RW 01/04 KR. MULYA CILEDUG TANGERANG BANTEN",
      kelurahan: "-",
      kecamatan: "-",
      kota: "-",
      kodepos: "-",
      provinsi: "-",
      nama_pasangan: "-",
      tgl_lahir_pasangan: "-",
      no_telp_pasangan: "-",
      no_ktp_pasangan: "-",
      no_bpjs_pasangan: "-",
      nama_bank_pasangan: "-",
      no_rekening_pasangan: "-",
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