const { user_admin, user_anggota } = require('../models');
const { verifyToken } = require('../helpers/jwt');
const createError = require('http-errors');

const authentication = async(req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) throw createError(401, 'You have to login first');
    const decoded = verifyToken(token);
    const registeredUserAdmin = await user_admin.findOne({ where: { id: decoded.id } });
    const registeredUserAnggota = await user_anggota.findOne({ where: { id: decoded.id } });
    if (!registeredUserAdmin && !registeredUserAnggota) throw createError(401, 'You have to login first');
    req.UserData = decoded;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;