const { claim_kematian, claim_kesehatan, claim_nilai_hidup, claim_perumahan, claim_pendidikan, user_admin, user_anggota, pesan_claim } = require("../models");
const { Op, where } = require("sequelize");
const changeStatusValidation = require("../helpers/changeStatusValidation");
const createError = require("http-errors");
const fs = require("fs");
const { sendSMS } = require("../helpers/smsApi");
const serverUrl = require("../helpers/serverUrl");

class ClaimDataController {
  static showClaimKematian = async (req, res, next) => {
    try {
      const { id } = req.UserData;
      const userData = await user_admin.findOne({ where: { id } });
      // let statusValidation = '0';
      // if (userData.status !== '007') statusValidation = userData.status;
      let query = {
        include: [
          {
            model: user_anggota,
            required: false,
          },
        ],
      };
      if (userData.status !== "007") query.where = { status: userData.status };
      const result = await claim_kematian.findAll(query);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  static showClaimKesehatan = async (req, res, next) => {
    try {
      const { id } = req.UserData;
      const userData = await user_admin.findOne({ where: { id } });
      // let statusValidation = '0';
      // if (userData.status !== '007') statusValidation = userData.status;
      let query = {
        include: [
          {
            model: user_anggota,
            required: false,
          },
        ],
      };
      if (userData.status !== "007") query.where = { status: userData.status };
      const result = await claim_kesehatan.findAll(query);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  static showClaimNilaiHidup = async (req, res, next) => {
    try {
      const { id } = req.UserData;
      const userData = await user_admin.findOne({ where: { id } });
      // let statusValidation = '0';
      // if (userData.status !== '007') statusValidation = userData.status;
      let query = {
        include: [
          {
            model: user_anggota,
            required: false,
          },
        ],
      };
      if (userData.status !== "007") query.where = { status: userData.status };
      const result = await claim_nilai_hidup.findAll(query);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  static showClaimPerumahan = async (req, res, next) => {
    try {
      const { id } = req.UserData;
      const userData = await user_admin.findOne({ where: { id } });
      // let statusValidation = '0';
      // if (userData.status !== '007') statusValidation = userData.status;
      let query = {
        include: [
          {
            model: user_anggota,
            required: false,
          },
        ],
      };
      if (userData.status !== "007") query.where = { status: userData.status };
      const result = await claim_perumahan.findAll(query);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  static showClaimPendidikan = async (req, res, next) => {
    try {
      const { id } = req.UserData;
      const userData = await user_admin.findOne({ where: { id } });
      // let statusValidation = '0';
      // if (userData.status !== '007') statusValidation = userData.status;
      let query = {
        include: [
          {
            model: user_anggota,
            required: false,
          },
        ],
      };
      if (userData.status !== "007") query.where = { status: userData.status };
      const result = await claim_pendidikan.findAll(query);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  static showClaimKematianId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await claim_kematian.findOne({
        where: { id },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            where: {
              claim_category: "Kematian",
            },
            required: false,
          },
        ],
      });
      if (!result) throw createError(404, "Klaim Tidak Ditemukan");
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  static showClaimKesehatanId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await claim_kesehatan.findOne({
        where: { id },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            where: {
              claim_category: "Kesehatan",
            },
            required: false,
          },
        ],
      });
      if (!result) throw createError(404, "Klaim Tidak Ditemukan");
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  static showClaimNilaiHidupId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await claim_nilai_hidup.findOne({
        where: { id },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            where: {
              claim_category: "Nilai Hidup",
            },
            required: false,
          },
        ],
      });
      if (!result) throw createError(404, "Klaim Tidak Ditemukan");
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  static showClaimPerumahanId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await claim_perumahan.findOne({
        where: { id },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            where: {
              claim_category: "Perumahan",
            },
            required: false,
          },
        ],
      });
      if (!result) throw createError(404, "Klaim Tidak Ditemukan");
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  static showClaimPendidikanId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await claim_pendidikan.findOne({
        where: { id },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            where: {
              claim_category: "Pendidikan",
            },
            required: false,
          },
        ],
      });
      if (!result) throw createError(404, "Klaim Tidak Ditemukan");
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  static changeStatusClaimKematian = async (req, res, next) => {
    try {
      const { id } = req.UserData;
      const { claim_id, status } = req.params;
      const { pesan } = req.body;
      const userData = await user_admin.findOne({ where: { id } });
      const claimData = await claim_kematian.findOne({ where: { id: claim_id } });
      if (!claimData) throw createError(404, "Claim Data Tidak Ditemukan");
      if (
        !changeStatusValidation({
          claim_status: Number(claimData.status),
          user_status: Number(userData.status),
          status,
        }) &&
        userData.status !== "007"
      )
        throw createError(401, "You are not authorized to do that!");
      await claim_kematian.update({ status: `${status}` }, { where: { id: claim_id } });
      const pesanClaimData = await pesan_claim.findOne({ where: { claim_id, claim_category: "Kematian" } });
      if (pesanClaimData) await pesan_claim.update({ pesan }, { where: { claim_id, claim_category: "Kematian" } });
      else await pesan_claim.create({ claim_id, claim_category: "Kematian", pesan });
      res.status(200).json({ msg: "Success" });
    } catch (err) {
      next(err);
    }
  };
  static changeStatusClaimKesehatan = async (req, res, next) => {
    try {
      const { id } = req.UserData;
      const { claim_id, status } = req.params;
      const { pesan } = req.body;
      const userData = await user_admin.findOne({ where: { id } });
      const claimData = await claim_kesehatan.findOne({ where: { id: claim_id } });
      if (!claimData) throw createError(404, "Claim Data Tidak Ditemukan");
      if (
        !changeStatusValidation({
          claim_status: Number(claimData.status),
          user_status: Number(userData.status),
          status,
        }) &&
        userData.status !== "007"
      )
        throw createError(401, "You are not authorized to do that!");
      await claim_kesehatan.update({ status: `${status}` }, { where: { id: claim_id } });
      const pesanClaimData = await pesan_claim.findOne({ where: { claim_id, claim_category: "Kesehatan" } });
      if (pesanClaimData) await pesan_claim.update({ pesan }, { where: { claim_id, claim_category: "Kesehatan" } });
      else await pesan_claim.create({ claim_id, claim_category: "Kesehatan", pesan });
      res.status(200).json({ msg: "Success" });
    } catch (err) {
      next(err);
    }
  };
  static changeStatusClaimNilaiHidup = async (req, res, next) => {
    try {
      const { id } = req.UserData;
      const { claim_id, status } = req.params;
      const { pesan } = req.body;
      const userData = await user_admin.findOne({ where: { id } });
      const claimData = await claim_nilai_hidup.findOne({ where: { id: claim_id } });
      if (!claimData) throw createError(404, "Claim Data Tidak Ditemukan");
      if (
        !changeStatusValidation({
          claim_status: Number(claimData.status),
          user_status: Number(userData.status),
          status,
        }) &&
        userData.status !== "007"
      )
        throw createError(401, "You are not authorized to do that!");
      await claim_nilai_hidup.update({ status: `${status}` }, { where: { id: claim_id } });
      const pesanClaimData = await pesan_claim.findOne({ where: { claim_id, claim_category: "Nilai Hidup" } });
      if (pesanClaimData) await pesan_claim.update({ pesan }, { where: { claim_id, claim_category: "Nilai Hidup" } });
      else await pesan_claim.create({ claim_id, claim_category: "Nilai Hidup", pesan });
      res.status(200).json({ msg: "Success" });
    } catch (err) {
      next(err);
    }
  };
  static changeStatusClaimPerumahan = async (req, res, next) => {
    try {
      const { id } = req.UserData;
      const { claim_id, status } = req.params;
      const { pesan } = req.body;
      const userData = await user_admin.findOne({ where: { id } });
      const claimData = await claim_perumahan.findOne({ where: { id: claim_id } });
      if (!claimData) throw createError(404, "Claim Data Tidak Ditemukan");
      if (
        !changeStatusValidation({
          claim_status: Number(claimData.status),
          user_status: Number(userData.status),
          status,
        }) &&
        userData.status !== "007"
      )
        throw createError(401, "You are not authorized to do that!");
      await claim_perumahan.update({ status: `${status}` }, { where: { id: claim_id } });
      const pesanClaimData = await pesan_claim.findOne({ where: { claim_id, claim_category: "Perumahan" } });
      if (pesanClaimData) await pesan_claim.update({ pesan }, { where: { claim_id, claim_category: "Perumahan" } });
      else await pesan_claim.create({ claim_id, claim_category: "Perumahan", pesan });
      res.status(200).json({ msg: "Success" });
    } catch (err) {
      next(err);
    }
  };
  static changeStatusClaimPendidikan = async (req, res, next) => {
    try {
      const { id } = req.UserData;
      const { claim_id, status } = req.params;
      const { pesan } = req.body;
      const userData = await user_admin.findOne({ where: { id } });
      const claimData = await claim_pendidikan.findOne({ where: { id: claim_id } });
      if (!claimData) throw createError(404, "Claim Data Tidak Ditemukan");
      if (
        !changeStatusValidation({
          claim_status: Number(claimData.status),
          user_status: Number(userData.status),
          status,
        }) &&
        userData.status !== "007"
      )
        throw createError(401, "You are not authorized to do that!");
      await claim_pendidikan.update({ status: `${status}` }, { where: { id: claim_id } });
      const pesanClaimData = await pesan_claim.findOne({ where: { claim_id, claim_category: "Pendidikan" } });
      if (pesanClaimData) await pesan_claim.update({ pesan }, { where: { claim_id, claim_category: "Pendidikan" } });
      else await pesan_claim.create({ claim_id, claim_category: "Pendidikan", pesan });
      res.status(200).json({ msg: "Success" });
    } catch (err) {
      next(err);
    }
  };
  static addClaimKematian = async (req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const { nama, tgl_lahir, no_induk, satuan_kerja, golongan_pangkat, alamat, kelurahan, kecamatan, kota, kodepos, provinsi, no_telp, kota_pensiun, nama_alm, tgl_meninggal } = req.body;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const validation = await claim_kematian.findOne({ where: { user_id: userAnggota.id } });
      if (validation) throw createError(400, "Anda sudah pernah membuat claim");
      let queryData = {
        no_rekening_bank: userAnggota.no_rekening,
        status: "1",
        user_id: userAnggota.id,
        nama,
        tgl_lahir,
        no_induk,
        satuan_kerja,
        golongan_pangkat,
        alamat,
        kelurahan,
        kecamatan,
        kota,
        kodepos,
        provinsi,
        no_telp,
        kota_pensiun,
        nama_alm,
        tgl_meninggal,
      };
      if (req.files) {
        if (req.files["permohonan_ahli_waris"]) queryData.permohonan_ahli_waris = serverUrl + req.files["permohonan_ahli_waris"][0].path;
        if (req.files["keterangan_menginggal_dunia_lurah"]) queryData.keterangan_menginggal_dunia_lurah = serverUrl + req.files["keterangan_menginggal_dunia_lurah"][0].path;
        if (req.files["keterangan_meninggal_dunia_rumah_sakit"]) queryData.keterangan_meninggal_dunia_rumah_sakit = serverUrl + req.files["keterangan_meninggal_dunia_rumah_sakit"][0].path;
        if (req.files["keterangan_kepolisian"]) queryData.keterangan_kepolisian = serverUrl + req.files["keterangan_kepolisian"][0].path;
        if (req.files["fotokopi_kp"]) queryData.fotokopi_kp = serverUrl + req.files["fotokopi_kp"][0].path;
        if (req.files["fotokopi_kk"]) queryData.fotokopi_kk = serverUrl + req.files["fotokopi_kk"][0].path;
        if (req.files["fotokopi_sk_pengangkatan"]) queryData.fotokopi_sk_pengangkatan = serverUrl + req.files["fotokopi_sk_pengangkatan"][0].path;
        if (req.files["fotokopi_sk_pensiun"]) queryData.fotokopi_sk_pensiun = serverUrl + req.files["fotokopi_sk_pensiun"][0].path;
        if (req.files["lampiran"]) queryData.lampiran = serverUrl + req.files["lampiran"][0].path;
      }
      const result = await claim_kematian.create(queryData);
      const pesanClaim = await pesan_claim.create({
        claim_id: result.id,
        claim_category: "Kematian",
        pesan: "",
      });
      await claim_kematian.update({ pesan_claim_id: pesanClaim.id }, { where: { id: result.id } });
      res.status(201).json(result);
    } catch (err) {
      if (req.files["permohonan_ahli_waris"]) fs.unlinkSync(req.files["permohonan_ahli_waris"][0].path);
      if (req.files["keterangan_menginggal_dunia_lurah"]) fs.unlinkSync(req.files["keterangan_menginggal_dunia_lurah"][0].path);
      if (req.files["keterangan_meninggal_dunia_rumah_sakit"]) fs.unlinkSync(req.files["keterangan_meninggal_dunia_rumah_sakit"][0].path);
      if (req.files["keterangan_kepolisian"]) fs.unlinkSync(req.files["keterangan_kepolisian"][0].path);
      if (req.files["fotokopi_kp"]) fs.unlinkSync(req.files["fotokopi_kp"][0].path);
      if (req.files["fotokopi_kk"]) fs.unlinkSync(req.files["fotokopi_kk"][0].path);
      if (req.files["fotokopi_sk_pengangkatan"]) fs.unlinkSync(req.files["fotokopi_sk_pengangkatan"][0].path);
      if (req.files["fotokopi_sk_pensiun"]) fs.unlinkSync(req.files["fotokopi_sk_pensiun"][0].path);
      if (req.files["lampiran"]) fs.unlinkSync(req.files["lampiran"][0].path);
      next(err);
    }
  };
  static addClaimKesehatan = async (req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const validation = await claim_kesehatan.findOne({ where: { user_id: userAnggota.id } });
      const {
        nama,
        tgl_lahir,
        no_induk,
        satuan_kerja,
        golongan_pangkat,
        alamat,
        kelurahan,
        kecamatan,
        kota,
        kodepos,
        provinsi,
        no_telp,
        kota_pensiun,
        pasien,
        status_rawat,
        rumah_sakit,
        sakit,
        nama_dokter,
        tgl_masuk,
      } = req.body;
      if (validation) throw createError(400, "Anda sudah pernah membuat claim");
      let queryData = {
        no_rekening_bank: userAnggota.no_rekening,
        status: "1",
        user_id: userAnggota.id,
        nama,
        tgl_lahir,
        no_induk,
        satuan_kerja,
        golongan_pangkat,
        alamat,
        kelurahan,
        kecamatan,
        kota,
        kodepos,
        provinsi,
        no_telp,
        kota_pensiun,
        pasien,
        status_rawat,
        rumah_sakit,
        sakit,
        nama_dokter,
        tgl_masuk,
      };
      if (req.files) {
        if (req.files["surat_permohonan_bantuan_biaya"]) queryData.surat_permohonan_bantuan_biaya = serverUrl + req.files["surat_permohonan_bantuan_biaya"][0].path;
        if (req.files["kuitansi_asli_rs"]) queryData.kuitansi_asli_rs = serverUrl + req.files["kuitansi_asli_rs"][0].path;
        if (req.files["surat_keterangan_rs"]) queryData.surat_keterangan_rs = serverUrl + req.files["surat_keterangan_rs"][0].path;
        if (req.files["fotokopi_sk_pensiun"]) queryData.fotokopi_sk_pensiun = serverUrl + req.files["fotokopi_sk_pensiun"][0].path;
        if (req.files["fotokopi_kp"]) queryData.fotokopi_kp = serverUrl + req.files["fotokopi_kp"][0].path;
        if (req.files["lampiran"]) queryData.lampiran = serverUrl + req.files["lampiran"][0].path;
      }
      const result = await claim_kesehatan.create(queryData);
      const pesanClaim = await pesan_claim.create({
        claim_id: result.id,
        claim_category: "Kesehatan",
        pesan: "",
      });
      await claim_kesehatan.update({ pesan_claim_id: pesanClaim.id }, { where: { id: result.id } });
      res.status(201).json(result);
    } catch (err) {
      if (req.files["surat_permohonan_bantuan_biaya"]) fs.unlinkSync(req.files["surat_permohonan_bantuan_biaya"][0].path);
      if (req.files["kuitansi_asli_rs"]) fs.unlinkSync(req.files["kuitansi_asli_rs"][0].path);
      if (req.files["surat_keterangan_rs"]) fs.unlinkSync(req.files["surat_keterangan_rs"][0].path);
      if (req.files["fotokopi_sk_pensiun"]) fs.unlinkSync(req.files["fotokopi_sk_pensiun"][0].path);
      if (req.files["fotokopi_kp"]) fs.unlinkSync(req.files["fotokopi_kp"][0].path);
      if (req.files["lampiran"]) fs.unlinkSync(req.files["lampiran"][0].path);
      next(err);
    }
  };
  static addClaimNilaiHidup = async (req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const validation = await claim_nilai_hidup.findOne({ where: { user_id: userAnggota.id } });
      if (validation) throw createError(400, "Anda sudah pernah membuat claim");
      const {
        nama,
        tgl_lahir,
        no_induk,
        satuan_kerja,
        golongan_pangkat,
        alamat,
        kelurahan,
        kecamatan,
        kota,
        kodepos,
        provinsi,
        no_telp,
        kota_pensiun,
      } = req.body;
      let queryData = {
        no_rekening_bank: userAnggota.no_rekening,
        status: "1",
        user_id: userAnggota.id,
        nama,
        tgl_lahir,
        no_induk,
        satuan_kerja,
        golongan_pangkat,
        alamat,
        kelurahan,
        kecamatan,
        kota,
        kodepos,
        provinsi,
        no_telp,
        kota_pensiun,
      };
      if (req.files) {
        if (req.files["permohonan_pensiunan"]) queryData.permohonan_pensiunan = serverUrl + req.files["permohonan_pensiunan"][0].path;
        if (req.files["pernyataan_dari_pensiunan"]) queryData.pernyataan_dari_pensiunan = serverUrl + req.files["pernyataan_dari_pensiunan"][0].path;
        if (req.files["fotokopi_kp"]) queryData.fotokopi_kp = serverUrl + req.files["fotokopi_kp"][0].path;
        if (req.files["fotokopi_sk_pensiun"]) queryData.fotokopi_sk_pensiun = serverUrl + req.files["fotokopi_sk_pensiun"][0].path;
        if (req.files["lampiran"]) queryData.lampiran = serverUrl + req.files["lampiran"][0].path;
      }
      const result = await claim_nilai_hidup.create(queryData);
      const pesanClaim = await pesan_claim.create({
        claim_id: result.id,
        claim_category: "Nilai Hidup",
        pesan: "",
      });
      await claim_nilai_hidup.update({ pesan_claim_id: pesanClaim.id }, { where: { id: result.id } });
      res.status(201).json(result);
    } catch (err) {
      if (req.files["permohonan_pensiunan"]) fs.unlinkSync(req.files["permohonan_pensiunan"][0].path);
      if (req.files["pernyataan_dari_pensiunan"]) fs.unlinkSync(req.files["pernyataan_dari_pensiunan"][0].path);
      if (req.files["fotokopi_kp"]) fs.unlinkSync(req.files["fotokopi_kp"][0].path);
      if (req.files["fotokopi_sk_pensiun"]) fs.unlinkSync(req.files["fotokopi_sk_pensiun"][0].path);
      if (req.files["lampiran"]) fs.unlinkSync(req.files["lampiran"][0].path);
      next(err);
    }
  };
  static addClaimPerumahan = async (req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const validation = await claim_perumahan.findOne({ where: { user_id: userAnggota.id } });
      if (validation) throw createError(400, "Anda sudah pernah membuat claim");
      let queryData = {
        no_rekening_bank: userAnggota.no_rekening,
        status: "1",
        user_id: userAnggota.id,
      };
      if (req.files) {
        if (req.files["blanko_permohonan"]) queryData.blanko_permohonan = serverUrl + req.files["blanko_permohonan"][0].path;
        if (req.files["surat_keputusan_phk"]) queryData.surat_keputusan_phk = serverUrl + req.files["surat_keputusan_phk"][0].path;
        if (req.files["data_keluarga"]) queryData.data_keluarga = serverUrl + req.files["data_keluarga"][0].path;
        if (req.files["akumulasi_saldo"]) queryData.akumulasi_saldo = serverUrl + req.files["akumulasi_saldo"][0].path;
        if (req.files["lampiran"]) queryData.lampiran = serverUrl + req.files["lampiran"][0].path;
      }
      const result = await claim_perumahan.create(queryData);
      const pesanClaim = await pesan_claim.create({
        claim_id: result.id,
        claim_category: "Perumahan",
        pesan: "",
      });
      await claim_perumahan.update({ pesan_claim_id: pesanClaim.id }, { where: { id: result.id } });
      res.status(201).json(result);
    } catch (err) {
      if (req.files["blanko_permohonan"]) fs.unlinkSync(req.files["blanko_permohonan"][0].path);
      if (req.files["surat_keputusan_phk"]) fs.unlinkSync(req.files["surat_keputusan_phk"][0].path);
      if (req.files["data_keluarga"]) fs.unlinkSync(req.files["data_keluarga"][0].path);
      if (req.files["akumulasi_saldo"]) fs.unlinkSync(req.files["akumulasi_saldo"][0].path);
      if (req.files["lampiran"]) fs.unlinkSync(req.files["lampiran"][0].path);
      next(err);
    }
  };
  static addClaimPendidikan = async (req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const validation = await claim_pendidikan.findOne({ where: { user_id: userAnggota.id } });
      if (validation) throw createError(400, "Anda sudah pernah membuat claim");
      const {
        nama,
        tgl_lahir,
        no_induk,
        satuan_kerja,
        golongan_pangkat,
        alamat,
        kelurahan,
        kecamatan,
        kota,
        kodepos,
        provinsi,
        no_telp,
        kota_pensiun,
      } = req.body;
      let queryData = {
        no_rekening_bank: userAnggota.no_rekening,
        status: "1",
        user_id: userAnggota.id,
        nama,
        tgl_lahir,
        no_induk,
        satuan_kerja,
        golongan_pangkat,
        alamat,
        kelurahan,
        kecamatan,
        kota,
        kodepos,
        provinsi,
        no_telp,
        kota_pensiun,
      };
      if (req.files) {
        if (req.files["data1"]) queryData.data1 = serverUrl + req.files["data1"][0].path;
        if (req.files["data2"]) queryData.data2 = serverUrl + req.files["data2"][0].path;
        if (req.files["data3"]) queryData.data3 = serverUrl + req.files["data3"][0].path;
        if (req.files["data4"]) queryData.data4 = serverUrl + req.files["data4"][0].path;
        if (req.files["data5"]) queryData.data5 = serverUrl + req.files["data5"][0].path;
        if (req.files["lampiran"]) queryData.lampiran = serverUrl + req.files["lampiran"][0].path;
      }
      const result = await claim_pendidikan.create(queryData);
      const pesanClaim = await pesan_claim.create({
        claim_id: result.id,
        claim_category: "Pendidikan",
        pesan: "",
      });
      await claim_pendidikan.update({ pesan_claim_id: pesanClaim.id }, { where: { id: result.id } });
      res.status(201).json(result);
    } catch (err) {
      if (req.files["data1"]) fs.unlinkSync(req.files["data1"][0].path);
      if (req.files["data2"]) fs.unlinkSync(req.files["data2"][0].path);
      if (req.files["data3"]) fs.unlinkSync(req.files["data3"][0].path);
      if (req.files["data4"]) fs.unlinkSync(req.files["data4"][0].path);
      if (req.files["data5"]) fs.unlinkSync(req.files["data5"][0].path);
      if (req.files["lampiran"]) fs.unlinkSync(req.files["lampiran"][0].path);
      next(err);
    }
  };
  static editClaimKematian = async (req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const claimData = await claim_kematian.findOne({ where: { user_id: userAnggota.id } });
      if (!claimData) throw createError(404, "Claim Data Tidak Ditemukan");
      let queryData = {
        status: "1",
      };
      if (req.files) {
        if (req.files["permohonan_ahli_waris"]) queryData.permohonan_ahli_waris = serverUrl + req.files["permohonan_ahli_waris"][0].path;
        if (req.files["keterangan_menginggal_dunia_lurah"]) queryData.keterangan_menginggal_dunia_lurah = serverUrl + req.files["keterangan_menginggal_dunia_lurah"][0].path;
        if (req.files["keterangan_meninggal_dunia_rumah_sakit"]) queryData.keterangan_meninggal_dunia_rumah_sakit = serverUrl + req.files["keterangan_meninggal_dunia_rumah_sakit"][0].path;
        if (req.files["keterangan_kepolisian"]) queryData.keterangan_kepolisian = serverUrl + req.files["keterangan_kepolisian"][0].path;
        if (req.files["fotokopi_kp"]) queryData.fotokopi_kp = serverUrl + req.files["fotokopi_kp"][0].path;
        if (req.files["fotokopi_kk"]) queryData.fotokopi_kk = serverUrl + req.files["fotokopi_kk"][0].path;
        if (req.files["fotokopi_sk_pengangkatan"]) queryData.fotokopi_sk_pengangkatan = serverUrl + req.files["fotokopi_sk_pengangkatan"][0].path;
        if (req.files["fotokopi_sk_pensiun"]) queryData.fotokopi_sk_pensiun = serverUrl + req.files["fotokopi_sk_pensiun"][0].path;
      }
      const result = await claim_kematian.update(queryData, { where: { id: claimData.id } });
      if (req.files) {
        if (req.files["permohonan_ahli_waris"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.permohonan_ahli_waris.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["keterangan_menginggal_dunia_lurah"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.keterangan_menginggal_dunia_lurah.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["keterangan_meninggal_dunia_rumah_sakit"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.keterangan_meninggal_dunia_rumah_sakit.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["keterangan_kepolisian"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.keterangan_kepolisian.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["fotokopi_kp"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_kp.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["fotokopi_kk"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_kk.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["fotokopi_sk_pengangkatan"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_sk_pengangkatan.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["fotokopi_sk_pensiun"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_sk_pensiun.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
      }
      res.status(201).json(result);
    } catch (err) {
      if (req.files["permohonan_ahli_waris"]) fs.unlinkSync(req.files["permohonan_ahli_waris"][0].path);
      if (req.files["keterangan_menginggal_dunia_lurah"]) fs.unlinkSync(req.files["keterangan_menginggal_dunia_lurah"][0].path);
      if (req.files["keterangan_meninggal_dunia_rumah_sakit"]) fs.unlinkSync(req.files["keterangan_meninggal_dunia_rumah_sakit"][0].path);
      if (req.files["keterangan_kepolisian"]) fs.unlinkSync(req.files["keterangan_kepolisian"][0].path);
      if (req.files["fotokopi_kp"]) fs.unlinkSync(req.files["fotokopi_kp"][0].path);
      if (req.files["fotokopi_kk"]) fs.unlinkSync(req.files["fotokopi_kk"][0].path);
      if (req.files["fotokopi_sk_pengangkatan"]) fs.unlinkSync(req.files["fotokopi_sk_pengangkatan"][0].path);
      if (req.files["fotokopi_sk_pensiun"]) fs.unlinkSync(req.files["fotokopi_sk_pensiun"][0].path);
      next(err);
    }
  };
  static editClaimKesehatan = async (req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const claimData = await claim_kesehatan.findOne({ where: { user_id: userAnggota.id } });
      if (!claimData) throw createError(404, "Claim Data Tidak Ditemukan");
      let queryData = {
        status: "1",
      };
      if (req.files) {
        if (req.files["surat_permohonan_bantuan_biaya"]) queryData.surat_permohonan_bantuan_biaya = serverUrl + req.files["surat_permohonan_bantuan_biaya"][0].path;
        if (req.files["kuitansi_asli_rs"]) queryData.kuitansi_asli_rs = serverUrl + req.files["kuitansi_asli_rs"][0].path;
        if (req.files["surat_keterangan_rs"]) queryData.surat_keterangan_rs = serverUrl + req.files["surat_keterangan_rs"][0].path;
        if (req.files["fotokopi_sk_pensiun"]) queryData.fotokopi_sk_pensiun = serverUrl + req.files["fotokopi_sk_pensiun"][0].path;
        if (req.files["fotokopi_kp"]) queryData.fotokopi_kp = serverUrl + req.files["fotokopi_kp"][0].path;
      }
      const result = await claim_kesehatan.update(queryData, { where: { id: claimData.id } });
      if (req.files) {
        if (req.files["surat_permohonan_bantuan_biaya"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.surat_permohonan_bantuan_biaya.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["kuitansi_asli_rs"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.kuitansi_asli_rs.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["surat_keterangan_rs"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.surat_keterangan_rs.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["fotokopi_sk_pensiun"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_sk_pensiun.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["fotokopi_kp"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_kp.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
      }
      res.status(201).json(result);
    } catch (err) {
      if (req.files["surat_permohonan_bantuan_biaya"]) fs.unlinkSync(req.files["surat_permohonan_bantuan_biaya"][0].path);
      if (req.files["kuitansi_asli_rs"]) fs.unlinkSync(req.files["kuitansi_asli_rs"][0].path);
      if (req.files["surat_keterangan_rs"]) fs.unlinkSync(req.files["surat_keterangan_rs"][0].path);
      if (req.files["fotokopi_sk_pensiun"]) fs.unlinkSync(req.files["fotokopi_sk_pensiun"][0].path);
      if (req.files["fotokopi_kp"]) fs.unlinkSync(req.files["fotokopi_kp"][0].path);
      next(err);
    }
  };
  static editClaimNilaiHidup = async (req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const claimData = await claim_nilai_hidup.findOne({ where: { user_id: userAnggota.id } });
      if (!claimData) throw createError(404, "Claim Data Tidak Ditemukan");
      let queryData = {
        status: "1",
      };
      if (req.files) {
        if (req.files["permohonan_pensiunan"]) queryData.permohonan_pensiunan = serverUrl + req.files["permohonan_pensiunan"][0].path;
        if (req.files["pernyataan_dari_pensiunan"]) queryData.pernyataan_dari_pensiunan = serverUrl + req.files["pernyataan_dari_pensiunan"][0].path;
        if (req.files["fotokopi_kp"]) queryData.fotokopi_kp = serverUrl + req.files["fotokopi_kp"][0].path;
        if (req.files["fotokopi_sk_pensiun"]) queryData.fotokopi_sk_pensiun = serverUrl + req.files["fotokopi_sk_pensiun"][0].path;
      }
      const result = await claim_nilai_hidup.update(queryData, { where: { id: claimData.id } });
      if (req.files) {
        if (req.files["permohonan_pensiunan"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.permohonan_pensiunan.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["pernyataan_dari_pensiunan"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.pernyataan_dari_pensiunan.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["fotokopi_kp"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_kp.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["fotokopi_sk_pensiun"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.fotokopi_sk_pensiun.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
      }
      res.status(201).json(result);
    } catch (err) {
      if (req.files["permohonan_pensiunan"]) fs.unlinkSync(req.files["permohonan_pensiunan"][0].path);
      if (req.files["pernyataan_dari_pensiunan"]) fs.unlinkSync(req.files["pernyataan_dari_pensiunan"][0].path);
      if (req.files["fotokopi_kp"]) fs.unlinkSync(req.files["fotokopi_kp"][0].path);
      if (req.files["fotokopi_sk_pensiun"]) fs.unlinkSync(req.files["fotokopi_sk_pensiun"][0].path);
      next(err);
    }
  };
  static editClaimPerumahan = async (req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const claimData = await claim_perumahan.findOne({ where: { user_id: userAnggota.id } });
      if (!claimData) throw createError(404, "Claim Data Tidak Ditemukan");
      let queryData = {
        status: "1",
      };
      if (req.files) {
        if (req.files["blanko_permohonan"]) queryData.blanko_permohonan = serverUrl + req.files["blanko_permohonan"][0].path;
        if (req.files["surat_keputusan_phk"]) queryData.surat_keputusan_phk = serverUrl + req.files["surat_keputusan_phk"][0].path;
        if (req.files["data_keluarga"]) queryData.data_keluarga = serverUrl + req.files["data_keluarga"][0].path;
        if (req.files["akumulasi_saldo"]) queryData.akumulasi_saldo = serverUrl + req.files["akumulasi_saldo"][0].path;
      }
      const result = await claim_perumahan.update(queryData, { where: { id: claimData.id } });
      if (req.files) {
        if (req.files["blanko_permohonan"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.blanko_permohonan.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["surat_keputusan_phk"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.surat_keputusan_phk.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["data_keluarga"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.data_keluarga.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["akumulasi_saldo"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.akumulasi_saldo.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
      }
      res.status(201).json(result);
    } catch (err) {
      if (req.files["blanko_permohonan"]) fs.unlinkSync(req.files["blanko_permohonan"][0].path);
      if (req.files["surat_keputusan_phk"]) fs.unlinkSync(req.files["surat_keputusan_phk"][0].path);
      if (req.files["data_keluarga"]) fs.unlinkSync(req.files["data_keluarga"][0].path);
      if (req.files["akumulasi_saldo"]) fs.unlinkSync(req.files["akumulasi_saldo"][0].path);
      next(err);
    }
  };
  static editClaimPendidikan = async (req, res, next) => {
    try {
      const { idAnggota } = req.UserData;
      const userAnggota = await user_anggota.findOne({ where: { id: idAnggota } });
      const claimData = await claim_pendidikan.findOne({ where: { user_id: userAnggota.id } });
      if (!claimData) throw createError(404, "Claim Data Tidak Ditemukan");
      let queryData = {
        status: "1",
      };
      if (req.files) {
        if (req.files["data1"]) queryData.data1 = serverUrl + req.files["data1"][0].path;
        if (req.files["data2"]) queryData.data2 = serverUrl + req.files["data2"][0].path;
        if (req.files["data3"]) queryData.data3 = serverUrl + req.files["data3"][0].path;
        if (req.files["data4"]) queryData.data4 = serverUrl + req.files["data4"][0].path;
        if (req.files["data5"]) queryData.data5 = serverUrl + req.files["data5"][0].path;
      }
      const result = await claim_pendidikan.update(queryData, { where: { id: claimData.id } });
      if (req.files) {
        if (req.files["data1"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.data1.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["data2"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.data2.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["data3"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.data3.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["data4"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.data4.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
        if (req.files["data5"]) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = claimData.data5.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
        }
      }
      res.status(201).json(result);
    } catch (err) {
      if (req.files["data1"]) fs.unlinkSync(req.files["data1"][0].path);
      if (req.files["data2"]) fs.unlinkSync(req.files["data2"][0].path);
      if (req.files["data3"]) fs.unlinkSync(req.files["data3"][0].path);
      if (req.files["data4"]) fs.unlinkSync(req.files["data4"][0].path);
      if (req.files["data5"]) fs.unlinkSync(req.files["data5"][0].path);
      next(err);
    }
  };
  static kematianBuktiTf = async (req, res, next) => {
    try {
      const { id } = req.params;
      let { pesan } = req.body;
      if (!pesan) pesan = "";
      if (!req.file) throw createError(400, "Bukti Tranfer Dibutuhkan!");
      const claimData = await claim_kematian.findOne({ where: { id } });
      if (!claimData) throw createError(404, "Data Not Found");
      await claim_kematian.update({ bukti_tf: serverUrl + req.file.path, status: "3" }, { where: { id } });
      const pesanClaimData = await pesan_claim.findOne({ where: { claim_id: id, claim_category: "Kematian" } });
      if (pesanClaimData) await pesan_claim.update({ pesan }, { where: { claim_id: id, claim_category: "Kematian" } });
      else await pesan_claim.create({ claim_id, claim_category: "Kematian", pesan });
      const userAnggota = await user_anggota.findOne({ where: { id: claimData.user_id } });
      sendSMS({
        name: userAnggota.nama,
        noTLP: userAnggota.no_telp,
        noRek: userAnggota.no_rekening,
      });
      res.status(200).json({ msg: "Success" });
    } catch (err) {
      if (req.file) fs.unlinkSync(req.file.path);
      next(err);
    }
  };
  static kesehatanBuktiTf = async (req, res, next) => {
    try {
      const { id } = req.params;
      let { pesan } = req.body;
      if (!pesan) pesan = "";
      if (!req.file) throw createError(400, "Bukti Tranfer Dibutuhkan!");
      const claimData = await claim_kesehatan.findOne({ where: { id } });
      if (!claimData) throw createError(404, "Data Not Found");
      await claim_kesehatan.update({ bukti_tf: serverUrl + req.file.path, status: "3" }, { where: { id } });
      const pesanClaimData = await pesan_claim.findOne({ where: { claim_id: id, claim_category: "Kesehatan" } });
      if (pesanClaimData) await pesan_claim.update({ pesan }, { where: { claim_id: id, claim_category: "Kesehatan" } });
      else await pesan_claim.create({ claim_id, claim_category: "Kesehatan", pesan });
      const userAnggota = await user_anggota.findOne({ where: { id: claimData.user_id } });
      sendSMS({
        name: userAnggota.nama,
        noTLP: userAnggota.no_telp,
        noRek: userAnggota.no_rekening,
      });
      res.status(200).json({ msg: "Success" });
    } catch (err) {
      if (req.file) fs.unlinkSync(req.file.path);
      next(err);
    }
  };
  static nilaiHidupBuktiTf = async (req, res, next) => {
    try {
      const { id } = req.params;
      let { pesan } = req.body;
      if (!pesan) pesan = "";
      if (!req.file) throw createError(400, "Bukti Tranfer Dibutuhkan!");
      const claimData = await claim_nilai_hidup.findOne({ where: { id } });
      if (!claimData) throw createError(404, "Data Not Found");
      await claim_nilai_hidup.update({ bukti_tf: serverUrl + req.file.path, status: "3" }, { where: { id } });
      const pesanClaimData = await pesan_claim.findOne({ where: { claim_id: id, claim_category: "Nilai Hidup" } });
      if (pesanClaimData) await pesan_claim.update({ pesan }, { where: { claim_id: id, claim_category: "Nilai Hidup" } });
      else await pesan_claim.create({ claim_id, claim_category: "Nilai Hidup", pesan });
      const userAnggota = await user_anggota.findOne({ where: { id: claimData.user_id } });
      sendSMS({
        name: userAnggota.nama,
        noTLP: userAnggota.no_telp,
        noRek: userAnggota.no_rekening,
      });
      res.status(200).json({ msg: "Success" });
    } catch (err) {
      if (req.file) fs.unlinkSync(req.file.path);
      next(err);
    }
  };
  static pendidikanBuktiTf = async (req, res, next) => {
    try {
      const { id } = req.params;
      let { pesan } = req.body;
      if (!pesan) pesan = "";
      if (!req.file) throw createError(400, "Bukti Tranfer Dibutuhkan!");
      const claimData = await claim_pendidikan.findOne({ where: { id } });
      if (!claimData) throw createError(404, "Data Not Found");
      await claim_pendidikan.update({ bukti_tf: serverUrl + req.file.path, status: "3" }, { where: { id } });
      const pesanClaimData = await pesan_claim.findOne({ where: { claim_id: id, claim_category: "Pendidikan" } });
      if (pesanClaimData) await pesan_claim.update({ pesan }, { where: { claim_id: id, claim_category: "Pendidikan" } });
      else await pesan_claim.create({ claim_id, claim_category: "Pendidikan", pesan });
      const userAnggota = await user_anggota.findOne({ where: { id: claimData.user_id } });
      sendSMS({
        name: userAnggota.nama,
        noTelp: userAnggota.no_telp,
        noRek: userAnggota.no_rekening,
      });
      res.status(200).json({ msg: "Success" });
    } catch (err) {
      if (req.file) fs.unlinkSync(req.file.path);
      next(err);
    }
  };
  static peumahanBuktiTf = async (req, res, next) => {
    try {
      const { id } = req.params;
      let { pesan } = req.body;
      if (!pesan) pesan = "";
      if (!req.file) throw createError(400, "Bukti Tranfer Dibutuhkan!");
      const claimData = await claim_perumahan.findOne({ where: { id } });
      if (!claimData) throw createError(404, "Data Not Found");
      await claim_perumahan.update({ bukti_tf: serverUrl + req.file.path, status: "3" }, { where: { id } });
      const pesanClaimData = await pesan_claim.findOne({ where: { claim_id: id, claim_category: "Perumahan" } });
      if (pesanClaimData) await pesan_claim.update({ pesan }, { where: { claim_id: id, claim_category: "Perumahan" } });
      else await pesan_claim.create({ claim_id, claim_category: "Perumahan", pesan });
      const userAnggota = await user_anggota.findOne({ where: { id: claimData.user_id } });
      sendSMS({
        name: userAnggota.nama,
        noTelp: userAnggota.no_telp,
        noRek: userAnggota.no_rekening,
      });
      res.status(200).json({ msg: "Success" });
    } catch (err) {
      if (req.file) fs.unlinkSync(req.file.path);
      next(err);
    }
  };
  static butuhVerifikasi = async (req, res, next) => {
    try {
      let result = [];
      const claimKematian = await claim_kematian.findAll({
        where: {
          status: "2",
        },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            required: false,
          },
        ],
      });
      const claimKesehatan = await claim_kesehatan.findAll({
        where: {
          status: "2",
        },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            required: false,
          },
        ],
      });
      const claimNilaiHidup = await claim_nilai_hidup.findAll({
        where: {
          status: "2",
        },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            required: false,
          },
        ],
      });
      const claimPendidikan = await claim_pendidikan.findAll({
        where: {
          status: "2",
        },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            required: false,
          },
        ],
      });
      const claimPerumahan = await claim_perumahan.findAll({
        where: {
          status: "2",
        },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            required: false,
          },
        ],
      });
      result = result.concat(claimKematian);
      result = result.concat(claimKesehatan);
      result = result.concat(claimNilaiHidup);
      result = result.concat(claimPendidikan);
      result = result.concat(claimPerumahan);
      result = result.sort((a, b) => b - a);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  static historiData = async (req, res, next) => {
    try {
      let result = [];
      const claimKematian = await claim_kematian.findAll({
        where: {
          status: "3",
        },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            required: false,
          },
        ],
      });
      const claimKesehatan = await claim_kesehatan.findAll({
        where: {
          status: "3",
        },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            required: false,
          },
        ],
      });
      const claimNilaiHidup = await claim_nilai_hidup.findAll({
        where: {
          status: "3",
        },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            required: false,
          },
        ],
      });
      const claimPendidikan = await claim_pendidikan.findAll({
        where: {
          status: "3",
        },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            required: false,
          },
        ],
      });
      const claimPerumahan = await claim_perumahan.findAll({
        where: {
          status: "3",
        },
        include: [
          {
            model: user_anggota,
            required: false,
          },
          {
            model: pesan_claim,
            required: false,
          },
        ],
      });
      result = result.concat(claimKematian);
      result = result.concat(claimKesehatan);
      result = result.concat(claimNilaiHidup);
      result = result.concat(claimPendidikan);
      result = result.concat(claimPerumahan);
      result = result.sort((a, b) => b - a);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = ClaimDataController;
