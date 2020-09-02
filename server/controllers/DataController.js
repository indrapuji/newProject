const { Data } = require('../models');

class DataController {
  static addData = async(req, res) => {
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
      const result = await Data.create(query);
      res.status(201).json(result);
    } catch (err) {
      if (err.name === 'SequelizeValidationError') {
        let msg = [];
        err.errors.forEach(x => {
          msg.push(x.message);
        });
        res.status(400).json({
          status: 400,
          msg
        })
      } else {
        console.log(err);
        res.status(500).json({ msg: 'Internal Server Error' });
      }
    }
  }
  static getData = async(req, res) => {
    try {
      const result = await Data.findAll();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ msg: 'Internal Server Error' });
    }
  }
};

module.exports = DataController;