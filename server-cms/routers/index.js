const router = require('express').Router();
const user = require('./user');
const claim_data = require('./claim_data');
const content = require('./content');

router.use('/users', user);
router.use('/data', claim_data);
router.use('/content', content);

module.exports = router;
