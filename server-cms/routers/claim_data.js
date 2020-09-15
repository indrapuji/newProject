const router = require('express').Router();
const ClaimDataController = require('../controllers/ClaimDataController');
const authentication = require('../middlewares/authentication');
const { adminAuth, addClaimAuth, staffAuth } = require('../middlewares/authorization');
const multer = require('multer');
const storage = require('../helpers/multer');

const upload = multer({ storage: storage });

router.get('/claim-kematian', authentication, adminAuth, ClaimDataController.showClaimKematian);
router.get('/claim-kesehatan', authentication, adminAuth, ClaimDataController.showClaimKesehatan);
router.get('/claim-nilai-hidup', authentication, adminAuth, ClaimDataController.showClaimNilaiHidup);
router.get('/claim-perumahan', authentication, adminAuth, ClaimDataController.showClaimPerumahan);
router.get('/claim-pendidikan', authentication, adminAuth, ClaimDataController.showClaimPendidikan);
router.get('/claim-kematian/:id', authentication, adminAuth, ClaimDataController.showClaimKematianId);
router.get('/claim-kesehatan/:id', authentication, adminAuth, ClaimDataController.showClaimKesehatanId);
router.get('/claim-nilai-hidup/:id', authentication, adminAuth, ClaimDataController.showClaimNilaiHidupId);
router.get('/claim-perumahan/:id', authentication, adminAuth, ClaimDataController.showClaimPerumahanId);
router.get('/claim-pendidikan/:id', authentication, adminAuth, ClaimDataController.showClaimPendidikanId);
router.post('/pindah-status/kematian/:claim_id/:status', authentication, adminAuth, ClaimDataController.changeStatusClaimKematian);
router.post('/pindah-status/kesehatan/:claim_id/:status', authentication, adminAuth, ClaimDataController.changeStatusClaimKesehatan);
router.post('/pindah-status/nilai-hidup/:claim_id/:status', authentication, adminAuth, ClaimDataController.changeStatusClaimNilaiHidup);
router.post('/pindah-status/perumahan/:claim_id/:status', authentication, adminAuth, ClaimDataController.changeStatusClaimPerumahan);
router.post('/pindah-status/pendidikan/:claim_id/:status', authentication, adminAuth, ClaimDataController.changeStatusClaimPendidikan);
router.post('/uploads/kematian', authentication, addClaimAuth,
  upload.fields([{
    name: 'permohonan_ahli_waris',
    maxCount: 1
  }, {
    name: 'keterangan_menginggal_dunia_lurah',
    maxCount: 1
  }, {
    name: 'keterangan_meninggal_dunia_rumah_sakit',
    maxCount: 1
  }, {
    name: 'keterangan_kepolisian',
    maxCount: 1
  }, {
    name: 'fotokopi_kp',
    maxCount: 1
  }, {
    name: 'fotokopi_kk',
    maxCount: 1
  }, {
    name: 'fotokopi_sk_pengangkatan',
    maxCount: 1
  }, {
    name: 'fotokopi_sk_pensiun',
    maxCount: 1
  }]),
  ClaimDataController.addClaimKematian);

router.post('/uploads/kesehatan', authentication, addClaimAuth,
  upload.fields([{
    name: 'surat_permohonan_bantuan_biaya',
    maxCount: 1
  }, {
    name: 'kuitansi_asli_rs',
    maxCount: 1
  }, {
    name: 'surat_keterangan_rs',
    maxCount: 1
  }, {
    name: 'fotokopi_sk_pensiun',
    maxCount: 1
  }, {
    name: 'fotokopi_kp',
    maxCount: 1
  }]),
  ClaimDataController.addClaimKesehatan);

router.post('/uploads/nilai-hidup', authentication, addClaimAuth,
  upload.fields([{
    name: 'permohonan_pensiunan',
    maxCount: 1
  }, {
    name: 'pernyataan_dari_pensiunan',
    maxCount: 1
  }, {
    name: 'fotokopi_kp',
    maxCount: 1
  }, {
    name: 'fotokopi_sk_pensiun',
    maxCount: 1
  }]),
  ClaimDataController.addClaimNilaiHidup);

router.post('/uploads/perumahan', authentication, addClaimAuth,
  upload.fields([{
    name: 'blanko_permohonan',
    maxCount: 1
  }, {
    name: 'surat_keputusan_phk',
    maxCount: 1
  }, {
    name: 'data_keluarga',
    maxCount: 1
  }, {
    name: 'akumulasi_saldo',
    maxCount: 1
  }]),
  ClaimDataController.addClaimPerumahan);

router.post('/uploads/pendidikan', authentication, addClaimAuth,
  upload.fields([{
    name: 'data1',
    maxCount: 1
  }, {
    name: 'data2',
    maxCount: 1
  }, {
    name: 'data3',
    maxCount: 1
  }, {
    name: 'data4',
    maxCount: 1
  }, {
    name: 'data5',
    maxCount: 1
  }]),
  ClaimDataController.addClaimPendidikan);

router.put('/edit/kematian', authentication, addClaimAuth,
  upload.fields([{
    name: 'permohonan_ahli_waris',
    maxCount: 1
  }, {
    name: 'keterangan_menginggal_dunia_lurah',
    maxCount: 1
  }, {
    name: 'keterangan_meninggal_dunia_rumah_sakit',
    maxCount: 1
  }, {
    name: 'keterangan_kepolisian',
    maxCount: 1
  }, {
    name: 'fotokopi_kp',
    maxCount: 1
  }, {
    name: 'fotokopi_kk',
    maxCount: 1
  }, {
    name: 'fotokopi_sk_pengangkatan',
    maxCount: 1
  }, {
    name: 'fotokopi_sk_pensiun',
    maxCount: 1
  }]),
  ClaimDataController.editClaimKematian);

router.put('/edit/kesehatan', authentication, addClaimAuth,
  upload.fields([{
    name: 'surat_permohonan_bantuan_biaya',
    maxCount: 1
  }, {
    name: 'kuitansi_asli_rs',
    maxCount: 1
  }, {
    name: 'surat_keterangan_rs',
    maxCount: 1
  }, {
    name: 'fotokopi_sk_pensiun',
    maxCount: 1
  }, {
    name: 'fotokopi_kp',
    maxCount: 1
  }]),
  ClaimDataController.editClaimKesehatan);

router.put('/edit/nilai-hidup', authentication, addClaimAuth,
  upload.fields([{
    name: 'permohonan_pensiunan',
    maxCount: 1
  }, {
    name: 'pernyataan_dari_pensiunan',
    maxCount: 1
  }, {
    name: 'fotokopi_kp',
    maxCount: 1
  }, {
    name: 'fotokopi_sk_pensiun',
    maxCount: 1
  }]),
  ClaimDataController.editClaimNilaiHidup);

router.put('/edit/perumahan', authentication, addClaimAuth,
  upload.fields([{
    name: 'blanko_permohonan',
    maxCount: 1
  }, {
    name: 'surat_keputusan_phk',
    maxCount: 1
  }, {
    name: 'data_keluarga',
    maxCount: 1
  }, {
    name: 'akumulasi_saldo',
    maxCount: 1
  }]),
  ClaimDataController.editClaimPerumahan);

router.put('/edit/pendidikan', authentication, addClaimAuth,
  upload.fields([{
    name: 'data1',
    maxCount: 1
  }, {
    name: 'data2',
    maxCount: 1
  }, {
    name: 'data3',
    maxCount: 1
  }, {
    name: 'data4',
    maxCount: 1
  }, {
    name: 'data5',
    maxCount: 1
  }]),
  ClaimDataController.editClaimPendidikan);

router.put('/bukti-transfer/kematian/:id', authentication, staffAuth, upload.single('bukti_tf'), ClaimDataController.kematianBuktiTf);
router.put('/bukti-transfer/kesehatan/:id', authentication, staffAuth, upload.single('bukti_tf'), ClaimDataController.kesehatanBuktiTf);
router.put('/bukti-transfer/nilai-hidup/:id', authentication, staffAuth, upload.single('bukti_tf'), ClaimDataController.nilaiHidupBuktiTf);
router.put('/bukti-transfer/pendidikan/:id', authentication, staffAuth, upload.single('bukti_tf'), ClaimDataController.pendidikanBuktiTf);
router.put('/bukti-transfer/perumahan/:id', authentication, staffAuth, upload.single('bukti_tf'), ClaimDataController.peumahanBuktiTf);

module.exports = router;