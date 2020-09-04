const router = require('express').Router();
const ClaimDataController = require('../controllers/ClaimDataController');
const authentication = require('../middlewares/authentication');
const { adminAuth } = require('../middlewares/authorization');

router.get('/claim-kematian', authentication, adminAuth, ClaimDataController.showClaimKematian);
router.get('/claim-kesehatan', authentication, adminAuth, ClaimDataController.showClaimKesehatan);
router.get('/claim-nilai-hidup', authentication, adminAuth, ClaimDataController.showClaimNilaiHidup);
router.get('/claim-perumahan', authentication, adminAuth, ClaimDataController.showClaimPerumahan);
router.get('/claim-pendidikan', authentication, adminAuth, ClaimDataController.showClaimPendidikan);
router.get('/pindah-status/kematian/:claim_id/:status', authentication, adminAuth, ClaimDataController.changeStatusClaimKematian);
router.get('/pindah-status/kesehatan/:claim_id/:status', authentication, adminAuth, ClaimDataController.changeStatusClaimKesehatan);
router.get('/pindah-status/nilai-hidup/:claim_id/:status', authentication, adminAuth, ClaimDataController.changeStatusClaimNilaiHidup);
router.get('/pindah-status/perumahan/:claim_id/:status', authentication, adminAuth, ClaimDataController.changeStatusClaimPerumahan);
router.get('/pindah-status/pendidikan/:claim_id/:status', authentication, adminAuth, ClaimDataController.changeStatusClaimPendidikan);


module.exports = router;