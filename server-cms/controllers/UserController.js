const createError = require('http-errors')
const { user_admin, user_anggota } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class UserController {
  static login = async(req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw createError(400, 'Wrong Username / Password');
      const adminUser = await user_admin.findOne({ where: { email } });
      const userAnggota = await user_anggota.findOne({ where: { email } });
      if (!adminUser && !userAnggota) throw createError(400, 'Wrong Username / Password');
      let result = { access_token: null, user_data: null };
      if (adminUser) {
        if (!comparePassword(password, adminUser.password)) throw createError(400, 'Wrong Username / Password');
        result.access_token = generateToken({ id: adminUser.id });
        result.user_data = adminUser;
      } else {
        if (!comparePassword(password, userAnggota.password)) throw createError(400, 'Wrong Username / Password');
        result.access_token = generateToken({ id: userAnggota.id });
        result.user_data = userAnggota;
      }
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
      const { id } = req.params;
      await user_anggota.destroy({ where: { id } });
      await user_admin.destroy({ where: { id } });
      res.status(200).json({ msg: 'Success' });
    } catch (err) {
      next(err);
    }
  }
};

module.exports = UserController;