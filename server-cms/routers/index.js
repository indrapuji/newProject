const router = require('express').Router();
const user = require('./user');
const claim_data = require('./claim_data');
const content = require('./content');
const createError = require("http-errors");
const fs = require("fs");

router.use('/users', user);
router.use('/data', claim_data);
router.use('/content', content);
router.get("/download", (req, res, next) => {
  try {
    const { file } = req.query;
    if (!file) throw createError(400, "File required");
    if (!fs.existsSync(file)) throw createError(404, "File not found");
    res.download(`./uploads/${file}`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
