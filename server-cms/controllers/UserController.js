const createError = require('http-errors')
const {
  user_admin,
  user_anggota,
  claim_kematian,
  claim_kesehatan,
  claim_nilai_hidup,
  claim_pendidikan,
  claim_perumahan,
} = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class UserController {
  static loginAnggota = async(req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw createError(400, 'Wrong Username / Password');
      const userAnggota = await user_anggota.findOne({ where: { email } });
      if (!userAnggota) throw createError(400, 'Wrong Username / Password');
      if (!comparePassword(password, userAnggota.password)) throw createError(400, 'Wrong Username / Password');
      let result = {
        access_token: generateToken({ id: userAnggota.id, role: 'anggota' }),
        user_data: userAnggota
      };
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static loginAdmin = async(req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw createError(400, 'Wrong Username / Password');
      const userAdmin = await user_admin.findOne({ where: { email } });
      if (!userAdmin) throw createError(400, 'Wrong Username / Password');
      if (!comparePassword(password, userAdmin.password)) throw createError(400, 'Wrong Username / Password');
      let result = {
        access_token: generateToken({ id: userAdmin.id, role: 'admin' }),
        user_data: userAdmin
      };
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static addUserAdmin = async(req, res, next) => {
    try {
      const { email, password, status, nama } = req.body;
      const result = await user_admin.create({ email, password, status, nama });
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }
  static deleteUser = async(req, res, next) => {
    try {
      const { email } = req.body;
      await user_anggota.destroy({ where: { email } });
      await user_admin.destroy({ where: { email } });
      res.status(200).json({ msg: 'Success' });
    } catch (err) {
      next(err);
    }
  }
  static userProfile = async(req, res, next) => {
    try {
      const { id, role } = req.UserData;
      if (role != 'anggota') throw createError(400, 'Hanya Untuk Anggota');
      const userData = await user_anggota.findOne({
        where: { id },
        include: [{
          model: claim_kematian,
          required: false
        }, {
          model: claim_kesehatan,
          required: false
        }, {
          model: claim_nilai_hidup,
          required: false
        }, {
          model: claim_perumahan,
          required: false
        }, {
          model: claim_pendidikan,
          required: false
        }, ]
      });
      res.status(200).json(userData);
    } catch (err) {
      next(err);
    }
  }
  static addAnggota = async(req, res, next) => {
    try {
      const {
        nama,
        no_induk,
        email,
        tgl_lahir,
        no_ktp,
        no_bpjs,
        nama_bank,
        no_rekening,
        satuan_kerja,
        golongan_pangkat,
        no_telp,
        alamat,
        kelurahan,
        kecamatan,
        kota,
        kodepos,
        provinsi,
        nama_pasangan,
        tgl_lahir_pasangan,
        no_telp_pasangan,
        no_ktp_pasangan,
        no_bpjs_pasangan,
        nama_bank_pasangan,
        no_rekening_pasangan,
        nama_anak,
        tgl_lahir_anak,
        no_tlp_anak,
        no_ktp_anak,
        no_bpjs_anak,
        nama_bank_anak,
        no_rekening_anak,
      } = req.body;
      const query = {
        nama,
        password: '123456',
        no_induk,
        email,
        tgl_lahir,
        no_ktp,
        no_bpjs,
        nama_bank,
        no_rekening,
        satuan_kerja,
        golongan_pangkat,
        no_telp,
        alamat,
        kelurahan,
        kecamatan,
        kota,
        kodepos,
        provinsi,
        nama_pasangan,
        tgl_lahir_pasangan,
        no_telp_pasangan,
        no_ktp_pasangan,
        no_bpjs_pasangan,
        nama_bank_pasangan,
        no_rekening_pasangan,
        nama_anak,
        tgl_lahir_anak,
        no_tlp_anak,
        no_ktp_anak,
        no_bpjs_anak,
        nama_bank_anak,
        no_rekening_anak,
      };
      const emailValidation = await user_admin.findOne({ where: { email } });
      if (emailValidation) throw createError(400, 'Email already been used');
      const result = await user_anggota.create(query);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  };
  static getAnggota = async(req, res, next) => {
    try {
      const result = await user_anggota.findAll();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
};

module.exports = UserController;