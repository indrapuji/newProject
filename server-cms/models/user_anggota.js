"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class user_anggota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_anggota.hasMany(models.claim_kematian, { foreignKey: "user_id" });
      user_anggota.hasMany(models.claim_kesehatan, { foreignKey: "user_id" });
      user_anggota.hasMany(models.claim_nilai_hidup, { foreignKey: "user_id" });
      user_anggota.hasMany(models.claim_perumahan, { foreignKey: "user_id" });
      user_anggota.hasMany(models.claim_pendidikan, { foreignKey: "user_id" });
    }
  }
  user_anggota.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Nama Harus Diisi",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Password Harus Diisi",
          },
        },
      },
      no_induk: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "No Induk Harus Diisi",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
      },
      tgl_lahir: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Tanggal Lahir Harus Diisi",
          },
        },
      },
      no_ktp: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "No KTP Harus Diisi",
          },
        },
      },
      no_bpjs: {
        type: DataTypes.STRING,
      },
      nama_bank: {
        type: DataTypes.STRING,
      },
      no_rekening: {
        type: DataTypes.STRING,
      },
      satuan_kerja: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Satuan Kerja Harus Diisi",
          },
        },
      },
      golongan_pangkat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Golongan Pangkat Harus Diisi",
          },
        },
      },
      no_telp: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "No Telp Harus Diisi",
          },
        },
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Alamat Harus Diisi",
          },
        },
      },
      kelurahan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Alamat Harus Diisi",
          },
        },
      },
      kecamatan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Alamat Harus Diisi",
          },
        },
      },
      kota: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Alamat Harus Diisi",
          },
        },
      },
      kodepos: DataTypes.STRING,
      provinsi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Alamat Harus Diisi",
          },
        },
      },
      nama_pasangan: {
        type: DataTypes.STRING,
      },
      tgl_lahir_pasangan: {
        type: DataTypes.STRING,
      },
      no_telp_pasangan: {
        type: DataTypes.STRING,
      },
      no_ktp_pasangan: {
        type: DataTypes.STRING,
      },
      no_bpjs_pasangan: {
        type: DataTypes.STRING,
      },
      nama_bank_pasangan: {
        type: DataTypes.STRING,
      },
      no_rekening_pasangan: {
        type: DataTypes.STRING,
      },
      nama_anak: DataTypes.STRING,
      tgl_lahir_anak: DataTypes.STRING,
      no_tlp_anak: DataTypes.STRING,
      no_ktp_anak: DataTypes.STRING,
      no_bpjs_anak: DataTypes.STRING,
      nama_bank_anak: DataTypes.STRING,
      no_rekening_anak: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_anggota",
      hooks: {
        beforeSave: (instance) => {
          instance.password = hashPassword(instance.password);
        },
      },
    }
  );

  return user_anggota;
};
