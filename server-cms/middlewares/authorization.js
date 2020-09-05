const { user_admin, user_anggota } = require('../models');
const createError = require('http-errors');

module.exports = {
  superAdminAuth: async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const registeredUserAdmin = await user_admin.findOne({ where: { id } });
      if (registeredUserAdmin.status !== '007') throw createError(401, 'You are not authorized to do that!');
      next();
    } catch (err) {
      next(err);
    }
  },
  adminAuth: async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const registeredUserAdmin = await user_admin.findOne({ where: { id } });
      if (!registeredUserAdmin || registeredUserAdmin.status === 0) throw createError(401, 'You are not authorized to do that!');
      next();
    } catch (err) {
      next(err);
    }
  },
  addClaimAuth: async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const { email } = req.body;
      const userAnggota = await user_anggota.findOne({ where: { id } });
      const userAdmin = await user_admin.findOne({ where: { id } });
      if (!userAnggota && !userAdmin) throw createError(401, 'You are not authorized to do that!');
      if (userAdmin && !userAdmin.status != '0' && !userAdmin.status != '007') throw createError(401, 'You are not authorized to do that!');
      if (userAnggota) {
        req.UserData.idAnggota = userAnggota.id;
      }
      else {
        const idAnggota = await user_anggota.findOne({ where: { email } });
        req.UserData.idAnggota = idAnggota.id;
      }
      next();
    } catch (err) {
      next(err);
    }
  }
}