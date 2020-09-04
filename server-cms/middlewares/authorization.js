const { user_admin } = require('../models');
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
  }
}