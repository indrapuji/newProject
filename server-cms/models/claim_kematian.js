'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class claim_kematian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      claim_kematian.belongsTo(models.user_anggota, { foreignKey: 'user_id' });
    }
  };
  claim_kematian.init({
    user_id: DataTypes.INTEGER,
    permohonan_ahli_waris: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Surat Permohonan dari Ahli Waris Pensiunan Harus Diisi",
        },
      },
    },
    status: DataTypes.STRING,
    keterangan_menginggal_dunia_lurah: {
      type: DataTypes.STRING
    },
    keterangan_meninggal_dunia_rumah_sakit: {
      type: DataTypes.STRING
    },
    keterangan_kepolisian: {
      type: DataTypes.STRING
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
    fotokopi_kk: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Fotokopi Kartu Keluarga Harus Diisi",
        },
      },
    },
    fotokopi_sk_pengangkatan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Fotokopi SK Pengangkatan Harus Diisi",
        },
      },
    },
    fotokopi_sk_pensiun: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Fotokopi SK Pengangkatan Harus Diisi",
        },
      },
    },
    no_rekening_bank: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "No Rekening Tujuan Harus Diisi",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'claim_kematian',
  });
  return claim_kematian;
};