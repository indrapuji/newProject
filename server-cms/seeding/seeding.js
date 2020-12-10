const {
  user_anggota,
} = require("../models");
const { hashPassword } = require("../helpers/bcrypt");
const seedingData = require("./seeding.json");
async function seed() {
  const query = seedingData.map((data, idx) => {
    var nama = data["Nama Pensiunan"].replace(/[^\w\s]/gi, '')
    var no_induk = data["NIP/NPP/NIK"].toString().replace(/[^\w\s]/gi, '')
    console.log(idx +  "=========");
    return {
      nama,
      password: hashPassword(no_induk),
      no_induk,
      email: data["Alamat E-Mail"] ? data["Alamat E-Mail"] : "-",
      tgl_lahir: data["Tanggal Lahir Pensiunan"] ? data["Tanggal Lahir Pensiunan"] : "-",
      no_ktp: data["No KTP Pensiunan"] ? data["No KTP Pensiunan"] : "-",
      no_bpjs: data["No BPJS Pensiunan"] ? data["No BPJS Pensiunan"] : "-",
      nama_bank: data["Nama Bank"] ? data["Nama Bank"] : "-",
      no_rekening: data["No Rekening Tabungan Pensiunan"] ? data["No Rekening Tabungan Pensiunan"] : "-",
      satuan_kerja: data["Satuan Kerja saat pensiun"] ? data["Satuan Kerja saat pensiun"] : "-",
      golongan_pangkat: data["Golongan Pensiun"] ? data["Golongan Pensiun"] : "-",
      no_telp: data["No Telepon / HP Pensiunan"] ? data["No Telepon / HP Pensiunan"] : "-",
      alamat: data["Alamat Rumah"] ? data["Alamat Rumah"] : "-",
      kelurahan: data["Kelurahan/DesaKelurahan/Desa"] ? data["Kelurahan/DesaKelurahan/Desa"] : "-",
      kecamatan: data["Kecamatan"] ? data["Kecamatan"] : "-",
      kota: data["Kota/Kabupaten"] ? data["Kota/Kabupaten"] : "-",
      kodepos: data["Kode Pos"] ? data["Kode Pos"] : "-",
      provinsi: data["Provinsi"] ? data["Provinsi"] : "-",
      nama_pasangan: data["Nama Isteri / Suami (Janda/Duda)"] ? data["Nama Isteri / Suami (Janda/Duda)"] : "-",
      tgl_lahir_pasangan: data["Tanggal Lahir Isteri/Suami (Janda/Duda)"] ? data["Tanggal Lahir Isteri/Suami (Janda/Duda)"] : "-",
      no_telp_pasangan: data["No Telepon / HP Isteri/Suami (Janda/Duda)"] ? data["No Telepon / HP Isteri/Suami (Janda/Duda)"] : "-",
      no_ktp_pasangan: data["No KTP Isteri/Suami (Janda / Duda)"] ? data["No KTP Isteri/Suami (Janda / Duda)"] : "-",
      no_bpjs_pasangan: data["No BPJS Isteri/Suami (Janda/Duda)"] ? data["No BPJS Isteri/Suami (Janda/Duda)"] : "-",
      nama_bank_pasangan: data["nama_bank_pasangan"] ? data["nama_bank_pasangan"] : "-",
      no_rekening_pasangan: data["No rkg Tab Isteri/Suami (Janda/Duda)"] ? data["No rkg Tab Isteri/Suami (Janda/Duda)"] : "-",
      nama_anak: data["Nama Anak (Anak usia <25 tahun, belum menikah)"] ? data["Nama Anak (Anak usia <25 tahun, belum menikah)"] : "-",
      tgl_lahir_anak: data["Tangga Lahir anak"] ? data["Tangga Lahir anak"] : "-",
      no_tlp_anak: data["No Telepon /Hp Anak"] ? data["No Telepon /Hp Anak"] : "-",
      no_ktp_anak: data["No KTP/Identitas Anak"] ? data["No KTP/Identitas Anak"] : "-",
      no_bpjs_anak: data["No BPJS Anak"] ? data["No BPJS Anak"] : "-",
      nama_bank_anak: data["nama_bank_anak"] ? data["nama_bank_anak"] : "-",
      no_rekening_anak: data["No Rekening Tabungan anak"] ? data["No Rekening Tabungan anak"] : "-",
    }
  });
  await user_anggota.bulkCreate(query);
  console.log("Finish");
}
console.log("Seeding Start");
seed();