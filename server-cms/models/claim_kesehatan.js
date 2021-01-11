'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class claim_kesehatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      claim_kesehatan.belongsTo(models.user_anggota, { foreignKey: 'user_id' });
      claim_kesehatan.belongsTo(models.pesan_claim, { foreignKey: 'pesan_claim_id' });
    }
  };
  claim_kesehatan.init({
    user_id: DataTypes.INTEGER,
    pesan_claim_id: DataTypes.INTEGER,
    surat_permohonan_bantuan_biaya: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Surat Permohonan Bantuan Biaya Harus Diisi",
        },
      },
    },
    status: DataTypes.STRING,
    kuitansi_asli_rs: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Kuitansi Asli dari RS Harus Diisi",
        },
      },
    },
    surat_keterangan_rs: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Surat Keterangan Sakit Harus Diisi",
        },
      },
    },
    fotokopi_sk_pensiun: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Fotokopi SK Pensiun Harus Diisi",
        },
      },
    },
    fotokopi_kp: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Fotokopi Kartu Peserta Harus Diisi",
        },
      },
    },
    no_rekening_bank: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "No Rekening Bank Harus Diisi",
        },
      },
    },
    bukti_tf: DataTypes.STRING,
    nama: DataTypes.STRING,
    tgl_lahir: DataTypes.STRING,
    no_induk: DataTypes.STRING,
    satuan_kerja: DataTypes.STRING,
    golongan_pangkat: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kota: DataTypes.STRING,
    kodepos: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    kota_pensiun: DataTypes.STRING,
    pasien: DataTypes.STRING,
    status_rawat: DataTypes.STRING,
    rumah_sakit: DataTypes.STRING,
    sakit: DataTypes.STRING,
    nama_dokter: DataTypes.STRING,
    tgl_masuk: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'claim_kesehatan',
  });
  return claim_kesehatan;
};