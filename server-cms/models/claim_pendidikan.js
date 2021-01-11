'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class claim_pendidikan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      claim_pendidikan.belongsTo(models.user_anggota, { foreignKey: 'user_id' });
      claim_pendidikan.belongsTo(models.pesan_claim, { foreignKey: 'pesan_claim_id' });
    }
  };
  claim_pendidikan.init({
    user_id: DataTypes.INTEGER,
    pesan_claim_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    data1: DataTypes.STRING,
    data2: DataTypes.STRING,
    data3: DataTypes.STRING,
    data4: DataTypes.STRING,
    data5: DataTypes.STRING,
    no_rekening_bank: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "No Rekening Bank Tujuan Harus Diisi",
        },
      },
    },
    bukti_tf: DataTypes.STRING,
    lampiran: DataTypes.STRING,
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
  }, {
    sequelize,
    modelName: 'claim_pendidikan',
  });
  return claim_pendidikan;
};