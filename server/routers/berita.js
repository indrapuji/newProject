const express = require('express')
const router = express.Router()

router.get("/", (req, res) => res.json({ message: "berita" }));
module.exports = router