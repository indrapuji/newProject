const router = require('express').Router();
const user = require('./user');
const claim_data = require('./claim_data');
const content = require('./content');

router.use('/users', user);
router.use('/data', claim_data);
router.use('/content', content);
router.get("/download", (req, res, next) => {
  try {
    const { file } = req.query;
    res.download(`./uploads/${file}`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
