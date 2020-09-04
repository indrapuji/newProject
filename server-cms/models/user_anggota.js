"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_anggota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: "Email harus Diisi / Format Email Salah",
          },
        },
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
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "No BPJS Harus Diisi",
          },
        },
      },
      nama_bank: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Nama Bank Harus Diisi",
          },
        },
      },
      no_rekening: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "No Rekening Harus Diisi",
          },
        },
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
      kelurahan: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
      kota: DataTypes.STRING,
      kodepos: DataTypes.STRING,
      provinsi: DataTypes.STRING,
      nama_pasangan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Nama Suami / Istri Harus Diisi",
          },
        },
      },
      tgl_lahir_pasangan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Tanggal Lahir Suami / Istri Harus Diisi",
          },
        },
      },
      no_telp_pasangan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "No Telp Suami / Istri Harus Diisi",
          },
        },
      },
      no_ktp_pasangan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "No KTP Suami / Istri Harus Diisi",
          },
        },
      },
      no_bpjs_pasangan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "No BPJS Suami / Istri Harus Diisi",
          },
        },
      },
      nama_bank_pasangan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Nama Bank Suami / Istri Harus Diisi",
          },
        },
      },
      no_rekening_pasangan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "No Rekening Suami / Istri Harus Diisi",
          },
        },
      },
      nama_anak: DataTypes.STRING,
      tgl_lahir_anak: DataTypes.STRING,
      no_tlp_anak: DataTypes.STRING,
      no_ktp_anak: DataTypes.STRING,
      no_bpjs_anak: DataTypes.STRING,
      nama_bank_anak: DataTypes.STRING,
      no_rekening_anak: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user_anggota",
    }
  );

  return user_anggota;
};
