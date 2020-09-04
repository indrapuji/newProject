const {
  claim_kematian,
  claim_kesehatan,
  claim_nilai_hidup,
  claim_perumahan,
  claim_pendidikan,
  user_admin
} = require('../models');
const { Op } = require("sequelize");
const changeStatusValidation = require('../helpers/changeStatusValidation');
const createError = require('http-errors');

class ClaimDataController {
  static showClaimKematian = async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const userData = await user_admin.findOne({ where: { id } });
      let statusValidation = '0';
      if (userData.status !== '007') statusValidation = userData.status;
      const result = await claim_kematian.findAll({
        where: {
          status: {
            [Op.gte]: statusValidation
          }
        }
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static showClaimKesehatan = async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const userData = await user_admin.findOne({ where: { id } });
      let statusValidation = '0';
      if (userData.status !== '007') statusValidation = userData.status;
      const result = await claim_kesehatan.findAll({
        where: {
          status: {
            [Op.gte]: statusValidation
          }
        }
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static showClaimNilaiHidup = async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const userData = await user_admin.findOne({ where: { id } });
      let statusValidation = '0';
      if (userData.status !== '007') statusValidation = userData.status;
      const result = await claim_nilai_hidup.findAll({
        where: {
          status: {
            [Op.gte]: statusValidation
          }
        }
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static showClaimPerumahan = async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const userData = await user_admin.findOne({ where: { id } });
      let statusValidation = '0';
      if (userData.status !== '007') statusValidation = userData.status;
      const result = await claim_perumahan.findAll({
        where: {
          status: {
            [Op.gte]: statusValidation
          }
        }
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static showClaimPendidikan = async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const userData = await user_admin.findOne({ where: { id } });
      let statusValidation = '0';
      if (userData.status !== '007') statusValidation = userData.status;
      const result = await claim_pendidikan.findAll({
        where: {
          status: {
            [Op.gte]: statusValidation
          }
        }
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static changeStatusClaimKematian = async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const { claim_id, status } = req.params;
      const userData = await user_admin.findOne({ where: { id } });
      const claimData = await claim_kematian.findOne({ where: { id: claim_id } });
      if (!claimData) throw createError(404, 'Claim Data Tidak Ditemukan');
      if (!changeStatusValidation({
          claim_status: Number(claimData.status),
          user_status: Number(userData.status),
          status
        } && userData.status !== '007')) throw createError(401, 'You are not authorized to do that!');
      await claim_kematian.update({ status: `${status}` }, { where: { id: claim_id } });
      res.status(200).json({ msg: 'Success' });
    } catch (err) {
      next(err);
    }
  }
  static changeStatusClaimKesehatan = async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const { claim_id, status } = req.params;
      const userData = await user_admin.findOne({ where: { id } });
      const claimData = await claim_kesehatan.findOne({ where: { id: claim_id } });
      if (!claimData) throw createError(404, 'Claim Data Tidak Ditemukan');
      if (!changeStatusValidation({
          claim_status: Number(claimData.status),
          user_status: Number(userData.status),
          status
        } && userData.status !== '007')) throw createError(401, 'You are not authorized to do that!');
      await claim_kesehatan.update({ status: `${status}` }, { where: { id: claim_id } });
      res.status(200).json({ msg: 'Success' });
    } catch (err) {
      next(err);
    }
  }
  static changeStatusClaimNilaiHidup = async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const { claim_id, status } = req.params;
      const userData = await user_admin.findOne({ where: { id } });
      const claimData = await claim_nilai_hidup.findOne({ where: { id: claim_id } });
      if (!claimData) throw createError(404, 'Claim Data Tidak Ditemukan');
      if (!changeStatusValidation({
          claim_status: Number(claimData.status),
          user_status: Number(userData.status),
          status
        } && userData.status !== '007')) throw createError(401, 'You are not authorized to do that!');
      await claim_nilai_hidup.update({ status: `${status}` }, { where: { id: claim_id } });
      res.status(200).json({ msg: 'Success' });
    } catch (err) {
      next(err);
    }
  }
  static changeStatusClaimPerumahan = async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const { claim_id, status } = req.params;
      const userData = await user_admin.findOne({ where: { id } });
      const claimData = await claim_perumahan.findOne({ where: { id: claim_id } });
      if (!claimData) throw createError(404, 'Claim Data Tidak Ditemukan');
      if (!changeStatusValidation({
          claim_status: Number(claimData.status),
          user_status: Number(userData.status),
          status
        } && userData.status !== '007')) throw createError(401, 'You are not authorized to do that!');
      await claim_perumahan.update({ status: `${status}` }, { where: { id: claim_id } });
      res.status(200).json({ msg: 'Success' });
    } catch (err) {
      next(err);
    }
  }
  static changeStatusClaimPendidikan = async(req, res, next) => {
    try {
      const { id } = req.UserData;
      const { claim_id, status } = req.params;
      const userData = await user_admin.findOne({ where: { id } });
      const claimData = await claim_pendidikan.findOne({ where: { id: claim_id } });
      if (!claimData) throw createError(404, 'Claim Data Tidak Ditemukan');
      if (!changeStatusValidation({
          claim_status: Number(claimData.status),
          user_status: Number(userData.status),
          status
        } && userData.status !== '007')) throw createError(401, 'You are not authorized to do that!');
      await claim_pendidikan.update({ status: `${status}` }, { where: { id: claim_id } });
      res.status(200).json({ msg: 'Success' });
    } catch (err) {
      next(err);
    }
  }
};

module.exports = ClaimDataController;