const {
  claim_kematian,
  claim_kesehatan,
  claim_nilai_hidup,
  claim_perumahan,
  claim_pendidikan,
  user_admin,
  user_anggota
} = require('../models');
const { Op } = require("sequelize");
const changeStatusValidation = require('../helpers/changeStatusValidation');
const createError = require('http-errors');

const serverUrl = 'http://localhost:3000/uploads/'

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
  static showClaimKematianId = async(req, res, next) => {
    try {
      const { id } = req.params;
      const result = await claim_kematian.findOne({ where: { id } });
      if (!result) throw createError(404, 'Klaim Tidak Ditemukan');
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static showClaimKesehatanId = async(req, res, next) => {
    try {
      const { id } = req.params;
      const result = await claim_kesehatan.findOne({ where: { id } });
      if (!result) throw createError(404, 'Klaim Tidak Ditemukan');
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static showClaimNilaiHidupId = async(req, res, next) => {
    try {
      const { id } = req.params;
      const result = await claim_nilai_hidup.findOne({ where: { id } });
      if (!result) throw createError(404, 'Klaim Tidak Ditemukan');
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static showClaimPerumahanId = async(req, res, next) => {
    try {
      const { id } = req.params;
      const result = await claim_perumahan.findOne({ where: { id } });
      if (!result) throw createError(404, 'Klaim Tidak Ditemukan');
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static showClaimPendidikanId = async(req, res, next) => {
    try {
      const { id } = req.params;
      const result = await claim_pendidikan.findOne({ where: { id } });
      if (!result) throw createError(404, 'Klaim Tidak Ditemukan');
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
  static addClaimKematian = async(req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const validation = await claim_kematian.findOne({ where: { user_id: userAnggota.id } });
      if (validation) throw createError(400, 'Anda sudah pernah membuat claim')
      let queryData = {
        no_rekening_bank: userAnggota.no_rekening,
        status: '1',
        user_id: userAnggota.id
      };
      if (req.files) {
        if (req.files['permohonan_ahli_waris']) queryData.permohonan_ahli_waris = serverUrl + req.files['permohonan_ahli_waris'][0].path;
        if (req.files['keterangan_menginggal_dunia_lurah']) queryData.keterangan_menginggal_dunia_lurah = serverUrl + req.files['keterangan_menginggal_dunia_lurah'][0].path;
        if (req.files['keterangan_meninggal_dunia_rumah_sakit']) queryData.keterangan_meninggal_dunia_rumah_sakit = serverUrl + req.files['keterangan_meninggal_dunia_rumah_sakit'][0].path;
        if (req.files['keterangan_kepolisian']) queryData.keterangan_kepolisian = serverUrl + req.files['keterangan_kepolisian'][0].path;
        if (req.files['fotokopi_kp']) queryData.fotokopi_kp = serverUrl + req.files['fotokopi_kp'][0].path;
        if (req.files['fotokopi_kk']) queryData.fotokopi_kk = serverUrl + req.files['fotokopi_kk'][0].path;
        if (req.files['fotokopi_sk_pengangkatan']) queryData.fotokopi_sk_pengangkatan = serverUrl + req.files['fotokopi_sk_pengangkatan'][0].path;
        if (req.files['fotokopi_sk_pensiun']) queryData.fotokopi_sk_pensiun = serverUrl + req.files['fotokopi_sk_pensiun'][0].path;
      }
      const result = await claim_kematian.create(queryData);
      res.status(201).json(result);
    } catch (err) {
      if (req.files['permohonan_ahli_waris']) fs.unlinkSync(req.files['permohonan_ahli_waris'][0].path);
      if (req.files['keterangan_menginggal_dunia_lurah']) fs.unlinkSync(req.files['keterangan_menginggal_dunia_lurah'][0].path);
      if (req.files['keterangan_meninggal_dunia_rumah_sakit']) fs.unlinkSync(req.files['keterangan_meninggal_dunia_rumah_sakit'][0].path);
      if (req.files['keterangan_kepolisian']) fs.unlinkSync(req.files['keterangan_kepolisian'][0].path);
      if (req.files['fotokopi_kp']) fs.unlinkSync(req.files['fotokopi_kp'][0].path);
      if (req.files['fotokopi_kk']) fs.unlinkSync(req.files['fotokopi_kk'][0].path);
      if (req.files['fotokopi_sk_pengangkatan']) fs.unlinkSync(req.files['fotokopi_sk_pengangkatan'][0].path);
      if (req.files['fotokopi_sk_pensiun']) fs.unlinkSync(req.files['fotokopi_sk_pensiun'][0].path);
      next(err);
    }
  }
  static addClaimKesehatan = async(req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const validation = await claim_kesehatan.findOne({ where: { user_id: userAnggota.id } });
      if (validation) throw createError(400, 'Anda sudah pernah membuat claim')
      let queryData = {
        no_rekening_bank: userAnggota.no_rekening,
        status: '1',
        user_id: userAnggota.id
      };
      if (req.files) {
        if (req.files['surat_permohonan_bantuan_biaya']) queryData.surat_permohonan_bantuan_biaya = serverUrl + req.files['surat_permohonan_bantuan_biaya'][0].path;
        if (req.files['kuitansi_asli_rs']) queryData.kuitansi_asli_rs = serverUrl + req.files['kuitansi_asli_rs'][0].path;
        if (req.files['surat_keterangan_rs']) queryData.surat_keterangan_rs = serverUrl + req.files['surat_keterangan_rs'][0].path;
        if (req.files['fotokopi_sk_pensiun']) queryData.fotokopi_sk_pensiun = serverUrl + req.files['fotokopi_sk_pensiun'][0].path;
        if (req.files['fotokopi_kp']) queryData.fotokopi_kp = serverUrl + req.files['fotokopi_kp'][0].path;
      }
      const result = await claim_kesehatan.create(queryData);
      res.status(201).json(result);
    } catch (err) {
      if (req.files['surat_permohonan_bantuan_biaya']) fs.unlinkSync(req.files['surat_permohonan_bantuan_biaya'][0].path);
      if (req.files['kuitansi_asli_rs']) fs.unlinkSync(req.files['kuitansi_asli_rs'][0].path);
      if (req.files['surat_keterangan_rs']) fs.unlinkSync(req.files['surat_keterangan_rs'][0].path);
      if (req.files['fotokopi_sk_pensiun']) fs.unlinkSync(req.files['fotokopi_sk_pensiun'][0].path);
      if (req.files['fotokopi_kp']) fs.unlinkSync(req.files['fotokopi_kp'][0].path);
      next(err);
    }
  }
  static addClaimNilaiHidup = async(req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const validation = await claim_nilai_hidup.findOne({ where: { user_id: userAnggota.id } });
      if (validation) throw createError(400, 'Anda sudah pernah membuat claim')
      let queryData = {
        no_rekening_bank: userAnggota.no_rekening,
        status: '1',
        user_id: userAnggota.id
      };
      if (req.files) {
        if (req.files['permohonan_pensiunan']) queryData.permohonan_pensiunan = serverUrl + req.files['permohonan_pensiunan'][0].path;
        if (req.files['pernyataan_dari_pensiunan']) queryData.pernyataan_dari_pensiunan = serverUrl + req.files['pernyataan_dari_pensiunan'][0].path;
        if (req.files['fotokopi_kp']) queryData.fotokopi_kp = serverUrl + req.files['fotokopi_kp'][0].path;
        if (req.files['fotokopi_sk_pensiun']) queryData.fotokopi_sk_pensiun = serverUrl + req.files['fotokopi_sk_pensiun'][0].path;
      }
      const result = await claim_nilai_hidup.create(queryData);
      res.status(201).json(result);
    } catch (err) {
      if (req.files['permohonan_pensiunan']) fs.unlinkSync(req.files['permohonan_pensiunan'][0].path);
      if (req.files['pernyataan_dari_pensiunan']) fs.unlinkSync(req.files['pernyataan_dari_pensiunan'][0].path);
      if (req.files['fotokopi_kp']) fs.unlinkSync(req.files['fotokopi_kp'][0].path);
      if (req.files['fotokopi_sk_pensiun']) fs.unlinkSync(req.files['fotokopi_sk_pensiun'][0].path);
      next(err);
    }
  }
  static addClaimPerumahan = async(req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const validation = await claim_perumahan.findOne({ where: { user_id: userAnggota.id } });
      if (validation) throw createError(400, 'Anda sudah pernah membuat claim')
      let queryData = {
        no_rekening_bank: userAnggota.no_rekening,
        status: '1',
        user_id: userAnggota.id
      };
      if (req.files) {
        if (req.files['blanko_permohonan']) queryData.blanko_permohonan = serverUrl + req.files['blanko_permohonan'][0].path;
        if (req.files['surat_keputusan_phk']) queryData.surat_keputusan_phk = serverUrl + req.files['surat_keputusan_phk'][0].path;
        if (req.files['data_keluarga']) queryData.data_keluarga = serverUrl + req.files['data_keluarga'][0].path;
        if (req.files['akumulasi_saldo']) queryData.akumulasi_saldo = serverUrl + req.files['akumulasi_saldo'][0].path;
      }
      const result = await claim_perumahan.create(queryData);
      res.status(201).json(result);
    } catch (err) {
      if (req.files['blanko_permohonan']) fs.unlinkSync(req.files['blanko_permohonan'][0].path);
      if (req.files['surat_keputusan_phk']) fs.unlinkSync(req.files['surat_keputusan_phk'][0].path);
      if (req.files['data_keluarga']) fs.unlinkSync(req.files['data_keluarga'][0].path);
      if (req.files['akumulasi_saldo']) fs.unlinkSync(req.files['akumulasi_saldo'][0].path);
      next(err);
    }
  }
  static addClaimPendidikan = async(req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const validation = await claim_pendidikan.findOne({ where: { user_id: userAnggota.id } });
      if (validation) throw createError(400, 'Anda sudah pernah membuat claim')
      let queryData = {
        no_rekening_bank: userAnggota.no_rekening,
        status: '1',
        user_id: userAnggota.id
      };
      if (req.files) {
        if (req.files['data1']) queryData.data1 = serverUrl + req.files['data1'][0].path;
        if (req.files['data2']) queryData.data2 = serverUrl + req.files['data2'][0].path;
        if (req.files['data3']) queryData.data3 = serverUrl + req.files['data3'][0].path;
        if (req.files['data4']) queryData.data4 = serverUrl + req.files['data4'][0].path;
        if (req.files['data5']) queryData.data5 = serverUrl + req.files['data5'][0].path;
      }
      const result = await claim_pendidikan.create(queryData);
      res.status(201).json(result);
    } catch (err) {
      if (req.files['data1']) fs.unlinkSync(req.files['data1'][0].path);
      if (req.files['data2']) fs.unlinkSync(req.files['data2'][0].path);
      if (req.files['data3']) fs.unlinkSync(req.files['data3'][0].path);
      if (req.files['data4']) fs.unlinkSync(req.files['data4'][0].path);
      if (req.files['data5']) fs.unlinkSync(req.files['data5'][0].path);
      next(err);
    }
  }
  static editClaimKematian = async(req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const claimData = await claim_kematian.findOne({ where: { user_id: userAnggota.id } });
      if (!claimData) throw createError(404, 'Claim Data Tidak Ditemukan');
      let queryData = {
        status: '1',
      };
      if (req.files) {
        if (req.files['permohonan_ahli_waris']) queryData.permohonan_ahli_waris = serverUrl + req.files['permohonan_ahli_waris'][0].path;
        if (req.files['keterangan_menginggal_dunia_lurah']) queryData.keterangan_menginggal_dunia_lurah = serverUrl + req.files['keterangan_menginggal_dunia_lurah'][0].path;
        if (req.files['keterangan_meninggal_dunia_rumah_sakit']) queryData.keterangan_meninggal_dunia_rumah_sakit = serverUrl + req.files['keterangan_meninggal_dunia_rumah_sakit'][0].path;
        if (req.files['keterangan_kepolisian']) queryData.keterangan_kepolisian = serverUrl + req.files['keterangan_kepolisian'][0].path;
        if (req.files['fotokopi_kp']) queryData.fotokopi_kp = serverUrl + req.files['fotokopi_kp'][0].path;
        if (req.files['fotokopi_kk']) queryData.fotokopi_kk = serverUrl + req.files['fotokopi_kk'][0].path;
        if (req.files['fotokopi_sk_pengangkatan']) queryData.fotokopi_sk_pengangkatan = serverUrl + req.files['fotokopi_sk_pengangkatan'][0].path;
        if (req.files['fotokopi_sk_pensiun']) queryData.fotokopi_sk_pensiun = serverUrl + req.files['fotokopi_sk_pensiun'][0].path;
      }
      const result = await claim_kematian.update(queryData, { where: { id: claimData.id } });
      if (req.files) {
        if (req.files['permohonan_ahli_waris']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.permohonan_ahli_waris.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['keterangan_menginggal_dunia_lurah']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.keterangan_menginggal_dunia_lurah.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['keterangan_meninggal_dunia_rumah_sakit']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.keterangan_meninggal_dunia_rumah_sakit.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['keterangan_kepolisian']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.keterangan_kepolisian.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['fotokopi_kp']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_kp.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['fotokopi_kk']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_kk.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['fotokopi_sk_pengangkatan']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_sk_pengangkatan.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['fotokopi_sk_pensiun']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_sk_pensiun.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
      }
      res.status(201).json(result);
    } catch (err) {
      if (req.files['permohonan_ahli_waris']) fs.unlinkSync(req.files['permohonan_ahli_waris'][0].path);
      if (req.files['keterangan_menginggal_dunia_lurah']) fs.unlinkSync(req.files['keterangan_menginggal_dunia_lurah'][0].path);
      if (req.files['keterangan_meninggal_dunia_rumah_sakit']) fs.unlinkSync(req.files['keterangan_meninggal_dunia_rumah_sakit'][0].path);
      if (req.files['keterangan_kepolisian']) fs.unlinkSync(req.files['keterangan_kepolisian'][0].path);
      if (req.files['fotokopi_kp']) fs.unlinkSync(req.files['fotokopi_kp'][0].path);
      if (req.files['fotokopi_kk']) fs.unlinkSync(req.files['fotokopi_kk'][0].path);
      if (req.files['fotokopi_sk_pengangkatan']) fs.unlinkSync(req.files['fotokopi_sk_pengangkatan'][0].path);
      if (req.files['fotokopi_sk_pensiun']) fs.unlinkSync(req.files['fotokopi_sk_pensiun'][0].path);
      next(err);
    }
  }
  static editClaimKesehatan = async(req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const claimData = await claim_kesehatan.findOne({ where: { user_id: userAnggota.id } });
      if (!claimData) throw createError(404, 'Claim Data Tidak Ditemukan');
      let queryData = {
        status: '1',
      };
      if (req.files) {
        if (req.files['surat_permohonan_bantuan_biaya']) queryData.surat_permohonan_bantuan_biaya = serverUrl + req.files['surat_permohonan_bantuan_biaya'][0].path;
        if (req.files['kuitansi_asli_rs']) queryData.kuitansi_asli_rs = serverUrl + req.files['kuitansi_asli_rs'][0].path;
        if (req.files['surat_keterangan_rs']) queryData.surat_keterangan_rs = serverUrl + req.files['surat_keterangan_rs'][0].path;
        if (req.files['fotokopi_sk_pensiun']) queryData.fotokopi_sk_pensiun = serverUrl + req.files['fotokopi_sk_pensiun'][0].path;
        if (req.files['fotokopi_kp']) queryData.fotokopi_kp = serverUrl + req.files['fotokopi_kp'][0].path;
      }
      const result = await claim_kesehatan.update(queryData, { where: { id: claimData.id } });
      if (req.files) {
        if (req.files['surat_permohonan_bantuan_biaya']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.surat_permohonan_bantuan_biaya.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['kuitansi_asli_rs']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.kuitansi_asli_rs.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['surat_keterangan_rs']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.surat_keterangan_rs.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['fotokopi_sk_pensiun']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_sk_pensiun.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['fotokopi_kp']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_kp.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
      }
      res.status(201).json(result);
    } catch (err) {
      if (req.files['surat_permohonan_bantuan_biaya']) fs.unlinkSync(req.files['surat_permohonan_bantuan_biaya'][0].path);
      if (req.files['kuitansi_asli_rs']) fs.unlinkSync(req.files['kuitansi_asli_rs'][0].path);
      if (req.files['surat_keterangan_rs']) fs.unlinkSync(req.files['surat_keterangan_rs'][0].path);
      if (req.files['fotokopi_sk_pensiun']) fs.unlinkSync(req.files['fotokopi_sk_pensiun'][0].path);
      if (req.files['fotokopi_kp']) fs.unlinkSync(req.files['fotokopi_kp'][0].path);
      next(err);
    }
  }
  static editClaimNilaiHidup = async(req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const claimData = await claim_nilai_hidup.findOne({ where: { user_id: userAnggota.id } });
      if (!claimData) throw createError(404, 'Claim Data Tidak Ditemukan');
      let queryData = {
        status: '1',
      };
      if (req.files) {
        if (req.files['permohonan_pensiunan']) queryData.permohonan_pensiunan = serverUrl + req.files['permohonan_pensiunan'][0].path;
        if (req.files['pernyataan_dari_pensiunan']) queryData.pernyataan_dari_pensiunan = serverUrl + req.files['pernyataan_dari_pensiunan'][0].path;
        if (req.files['fotokopi_kp']) queryData.fotokopi_kp = serverUrl + req.files['fotokopi_kp'][0].path;
        if (req.files['fotokopi_sk_pensiun']) queryData.fotokopi_sk_pensiun = serverUrl + req.files['fotokopi_sk_pensiun'][0].path;
      }
      const result = await claim_nilai_hidup.update(queryData, { where: { id: claimData.id } });
      if (req.files) {
        if (req.files['permohonan_pensiunan']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.permohonan_pensiunan.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['pernyataan_dari_pensiunan']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.pernyataan_dari_pensiunan.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['fotokopi_kp']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_kp.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['fotokopi_sk_pensiun']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_sk_pensiun.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
      }
      res.status(201).json(result);
    } catch (err) {
      if (req.files['permohonan_pensiunan']) fs.unlinkSync(req.files['permohonan_pensiunan'][0].path);
      if (req.files['pernyataan_dari_pensiunan']) fs.unlinkSync(req.files['pernyataan_dari_pensiunan'][0].path);
      if (req.files['fotokopi_kp']) fs.unlinkSync(req.files['fotokopi_kp'][0].path);
      if (req.files['fotokopi_sk_pensiun']) fs.unlinkSync(req.files['fotokopi_sk_pensiun'][0].path);
      next(err);
    }
  }
  static editClaimPerumahan = async(req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const claimData = await claim_perumahan.findOne({ where: { user_id: userAnggota.id } });
      if (!claimData) throw createError(404, 'Claim Data Tidak Ditemukan');
      let queryData = {
        status: '1',
      };
      if (req.files) {
        if (req.files['blanko_permohonan']) queryData.blanko_permohonan = serverUrl + req.files['blanko_permohonan'][0].path;
        if (req.files['surat_keputusan_phk']) queryData.surat_keputusan_phk = serverUrl + req.files['surat_keputusan_phk'][0].path;
        if (req.files['data_keluarga']) queryData.data_keluarga = serverUrl + req.files['data_keluarga'][0].path;
        if (req.files['akumulasi_saldo']) queryData.akumulasi_saldo = serverUrl + req.files['akumulasi_saldo'][0].path;
      }
      const result = await claim_perumahan.update(queryData, { where: { id: claimData.id } });
      if (req.files) {
        if (req.files['blanko_permohonan']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.blanko_permohonan.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['surat_keputusan_phk']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.surat_keputusan_phk.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['data_keluarga']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.data_keluarga.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['akumulasi_saldo']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.akumulasi_saldo.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
      }
      res.status(201).json(result);
    } catch (err) {
      if (req.files['blanko_permohonan']) fs.unlinkSync(req.files['blanko_permohonan'][0].path);
      if (req.files['surat_keputusan_phk']) fs.unlinkSync(req.files['surat_keputusan_phk'][0].path);
      if (req.files['data_keluarga']) fs.unlinkSync(req.files['data_keluarga'][0].path);
      if (req.files['akumulasi_saldo']) fs.unlinkSync(req.files['akumulasi_saldo'][0].path);
      next(err);
    }
  }
  static editClaimPendidikan = async(req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const claimData = await claim_pendidikan.findOne({ where: { user_id: userAnggota.id } });
      if (!claimData) throw createError(404, 'Claim Data Tidak Ditemukan');
      let queryData = {
        status: '1',
      };
      if (req.files) {
        if (req.files['data1']) queryData.data1 = serverUrl + req.files['data1'][0].path;
        if (req.files['data2']) queryData.data2 = serverUrl + req.files['data2'][0].path;
        if (req.files['data3']) queryData.data3 = serverUrl + req.files['data3'][0].path;
        if (req.files['data4']) queryData.data4 = serverUrl + req.files['data4'][0].path;
        if (req.files['data5']) queryData.data5 = serverUrl + req.files['data5'][0].path;
      }
      const result = await claim_pendidikan.update(queryData, { where: { id: claimData.id } });
      if (req.files) {
        if (req.files['data1']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.data1.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['data2']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.data2.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['data3']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.data3.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['data4']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.data4.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files['data5']) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.data5.replace(regex, '');
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
      }
      res.status(201).json(result);
    } catch (err) {
      if (req.files['data1']) fs.unlinkSync(req.files['data1'][0].path);
      if (req.files['data2']) fs.unlinkSync(req.files['data2'][0].path);
      if (req.files['data3']) fs.unlinkSync(req.files['data3'][0].path);
      if (req.files['data4']) fs.unlinkSync(req.files['data4'][0].path);
      if (req.files['data5']) fs.unlinkSync(req.files['data5'][0].path);
      next(err);
    }
  }
};

module.exports = ClaimDataController;