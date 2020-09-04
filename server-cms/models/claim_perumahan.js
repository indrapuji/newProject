'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class claim_perumahan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  claim_perumahan.init({
    user_id: DataTypes.INTEGER,
    blanko_permohonan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Blanko Permohonan Harus Diisi",
        },
      },
    },
    status: DataTypes.STRING,
    surat_keputusan_phk: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Surat Keputusan PHK Harus Diisi",
        },
      },
    },
    data_keluarga: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Data Keluarga Harus Diisi",
        },
      },
    },
    akumulasi_saldo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Akumulasi Saldo Iuran Harus Diisi",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'claim_perumahan',
  });
  return claim_perumahan;
};