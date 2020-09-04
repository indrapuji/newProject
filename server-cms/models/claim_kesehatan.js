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
    }
  };
  claim_kesehatan.init({
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
    }
  }, {
    sequelize,
    modelName: 'claim_kesehatan',
  });
  return claim_kesehatan;
};