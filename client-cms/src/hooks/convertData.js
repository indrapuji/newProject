const ConvertData = (data, section) => {
  if (section === 'kesehatan') {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      result.push({
        nama: data[i].user_anggotum.nama,
        no_induk: data[i].user_anggotum.no_induk,
        surat_permohonan_bantuan_biaya: data[i].surat_permohonan_bantuan_biaya,
        kuitansi_asli_rs: data[i].kuitansi_asli_rs,
        surat_keterangan_rs: data[i].surat_keterangan_rs,
        fotokopi_sk_pensiun: data[i].fotokopi_sk_pensiun,
        fotokopi_kp: data[i].fotokopi_kp,
      });
    }
    return result;
  }
  if (section === 'kematian') {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      result.push({
        nama: data[i].user_anggotum.nama,
        no_induk: data[i].user_anggotum.no_induk,
        permohonan_ahli_waris: data[i].permohonan_ahli_waris,
        keterangan_menginggal_dunia_lurah: data[i].keterangan_menginggal_dunia_lurah,
        keterangan_meninggal_dunia_rumah_sakit: data[i].keterangan_meninggal_dunia_rumah_sakit,
        keterangan_kepolisian: data[i].keterangan_kepolisian,
        fotokopi_kp: data[i].fotokopi_kp,
        fotokopi_kk: data[i].fotokopi_kk,
        fotokopi_sk_pengangkatan: data[i].fotokopi_sk_pengangkatan,
        fotokopi_sk_pensiun: data[i].fotokopi_sk_pensiun,
      });
    }
    return result;
  }
  if (section === 'manfaat') {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      result.push({
        nama: data[i].user_anggotum.nama,
        no_induk: data[i].user_anggotum.no_induk,
        pernyataan_dari_pensiunan: data[i].pernyataan_dari_pensiunan,
        permohonan_pensiunan: data[i].permohonan_pensiunan,
        fotokopi_kp: data[i].fotokopi_kp,
        fotokopi_sk_pensiun: data[i].fotokopi_sk_pensiun,
      });
    }
    return result;
  }
  if (section === 'kacamata') {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      result.push({
        nama: data[i].user_anggotum.nama,
        no_induk: data[i].user_anggotum.no_induk,
        data1: data[i].data1,
        data2: data[i].data2,
        data3: data[i].data3,
        data4: data[i].data4,
      });
    }
    return result;
  }
  if (section === 'done') {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      result.push({
        nama: data[i].user_anggotum.nama,
        no_induk: data[i].user_anggotum.no_induk,
        claim_category: data[i].pesan_claim.claim_category,
        email: data[i].user_anggotum.email,
        tgl_lahir: data[i].user_anggotum.tgl_lahir,
        no_ktp: data[i].user_anggotum.no_ktp,
        no_bpjs: data[i].user_anggotum.no_bpjs,
        nama_bank: data[i].user_anggotum.nama_bank,
        no_rekening: data[i].user_anggotum.no_rekening,
        satuan_kerja: data[i].user_anggotum.satuan_kerja,
        golongan_pangkat: data[i].user_anggotum.golongan_pangkat,
        no_telp: data[i].user_anggotum.no_telp,
        alamat: data[i].user_anggotum.alamat,
        kelurahan: data[i].user_anggotum.kelurahan,
        kecamatan: data[i].user_anggotum.kecamatan,
        kota: data[i].user_anggotum.kota,
        kodepos: data[i].user_anggotum.kodepos,
        provinsi: data[i].user_anggotum.provinsi,
        nama_pasangan: data[i].user_anggotum.nama_pasangan,
        tgl_lahir_pasangan: data[i].user_anggotum.tgl_lahir_pasangan,
        no_telp_pasangan: data[i].user_anggotum.no_telp_pasangan,
        no_ktp_pasangan: data[i].user_anggotum.no_ktp_pasangan,
        no_bpjs_pasangan: data[i].user_anggotum.no_bpjs_pasangan,
        nama_bank_pasangan: data[i].user_anggotum.nama_bank_pasangan,
        no_rekening_pasangan: data[i].user_anggotum.no_rekening_pasangan,
        nama_anak: data[i].user_anggotum.nama_anak,
        tgl_lahir_anak: data[i].user_anggotum.tgl_lahir_anak,
        no_tlp_anak: data[i].user_anggotum.no_tlp_anak,
        no_ktp_anak: data[i].user_anggotum.no_ktp_anak,
        no_bpjs_anak: data[i].user_anggotum.no_bpjs_anak,
        nama_bank_anak: data[i].user_anggotum.nama_bank_anak,
        no_rekening_anak: data[i].user_anggotum.no_rekening_anak,
        data1: data[i].data1,
        data2: data[i].data2,
        data3: data[i].data3,
        data4: data[i].data4,
        pernyataan_dari_pensiunan: data[i].pernyataan_dari_pensiunan,
        permohonan_pensiunan: data[i].permohonan_pensiunan,
        fotokopi_kp: data[i].fotokopi_kp,
        fotokopi_sk_pensiun: data[i].fotokopi_sk_pensiun,
        surat_permohonan_bantuan_biaya: data[i].surat_permohonan_bantuan_biaya,
        kuitansi_asli_rs: data[i].kuitansi_asli_rs,
        surat_keterangan_rs: data[i].surat_keterangan_rs,
        permohonan_ahli_waris: data[i].permohonan_ahli_waris,
        keterangan_menginggal_dunia_lurah: data[i].keterangan_menginggal_dunia_lurah,
        keterangan_meninggal_dunia_rumah_sakit: data[i].keterangan_meninggal_dunia_rumah_sakit,
        keterangan_kepolisian: data[i].keterangan_kepolisian,
        fotokopi_kk: data[i].fotokopi_kk,
        fotokopi_sk_pengangkatan: data[i].fotokopi_sk_pengangkatan,
      });
    }
    return result;
  }
};

export default ConvertData;
