const router = require('express').Router();
const user = require('./user');
const claim_data = require('./claim_data');
const content = require('./content');
const createError = require("http-errors");
const fs = require("fs");
const serverUrl = require("../helpers/serverUrl");
const multer = require("multer");
const storage = require("../helpers/multer");

const upload = multer({ storage: storage });

router.use('/users', user);
router.use('/data', claim_data);
router.use('/content', content);
router.get("/download", (req, res, next) => {
  try {
    const { file } = req.query;
    if (!file) throw createError(400, "File required");
    if (!fs.existsSync(`./uploads/${file}`)) throw createError(404, "File not found");
    res.download(`./uploads/${file}`);
  } catch (err) {
    next(err);
  }
});
router.post("/upload-pdf", upload.single("pdf"), (req, res, next) => {
  try {
    const result = serverUrl + req.file.path;
    res.status(201).json({ url: result });
  } catch (err) {
    next(err);
  }
})

module.exports = router;
