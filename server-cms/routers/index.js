const router = require('express').Router();
const user = require('./user');
const claim_data = require('./claim_data');

router.use('/users', user);
router.use('/data', claim_data);

module.exports = router;
