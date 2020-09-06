const { user_admin, user_anggota } = require('../models');
const createError = require('http-errors');

module.exports = {
  superAdminAuth: async(req, res, next) => {
    try {
      const { id, role } = req.UserData;
      if (role != 'admin') throw createError(401, 'You are not authorized to do that!');
      const registeredUserAdmin = await user_admin.findOne({ where: { id } });
      if (registeredUserAdmin.status !== '007') throw createError(401, 'You are not authorized to do that!');
      next();
    } catch (err) {
      next(err);
    }
  },
  adminAuth: async(req, res, next) => {
    try {
      const { id, role } = req.UserData;
      if (role != 'admin') throw createError(401, 'You are not authorized to do that!');
      const registeredUserAdmin = await user_admin.findOne({ where: { id } });
      if (!registeredUserAdmin || registeredUserAdmin.status === 0) throw createError(401, 'You are not authorized to do that!');
      next();
    } catch (err) {
      next(err);
    }
  },
  addClaimAuth: async(req, res, next) => {
    try {
      const { id, role } = req.UserData;
      if (role == 'admin') {
        const { email } = req.body;
        const userAdmin = await user_admin.findOne({ where: { id } });
        if (userAdmin.status != '0' && userAdmin.status != '007') throw createError(401, 'You are not authorized to do that!');
        const idAnggota = await user_anggota.findOne({ where: { email } });
        req.UserData.idAnggota = idAnggota.id;
        if (!idAnggota) throw createError(404, 'Anggota Tidak Ditemukan');
      } else {
        const idAnggota = await user_anggota.findOne({ where: { id } });
        req.UserData.idAnggota = idAnggota.id;
        if (!idAnggota) throw createError(404, 'Anggota Tidak Ditemukan');
      }
      next();
    } catch (err) {
      next(err);
    }
  }
}