'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class claim_nilai_hidup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      claim_nilai_hidup.belongsTo(models.user_anggota, { foreignKey: 'user_id' });
      claim_nilai_hidup.belongsTo(models.pesan_claim, { foreignKey: 'pesan_claim_id' });
    }
  };
  claim_nilai_hidup.init({
    user_id: DataTypes.INTEGER,
    pesan_claim_id: DataTypes.INTEGER,
    permohonan_pensiunan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Surat Permohonan Pensiunan Harus Diisi",
        },
      },
    },
    status: DataTypes.STRING,
    pernyataan_dari_pensiunan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Surat Pernyataan dari Pensiunan Harus Diisi",
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
    fotokopi_sk_pensiun: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Fotokopi SK Harus Diisi",
        },
      },
    },
    no_rekening_bank: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "No Rekening Bank Tujuan Harus Diisi",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'claim_nilai_hidup',
  });
  return claim_nilai_hidup;
};