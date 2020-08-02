const express = require("express");
const router = express.Router();
const beritaRouter = require("./berita");
const dataRouter = require("./data");
const galeriRouter = require("./galeri");
const kontakRouter = require("./kontak");
const profilRouter = require("./profil");
const programRouter = require("./program");

router.get("/", (req, res) => res.json({ message: "test" }));
router.use("/berita", beritaRouter);
router.use("/data", dataRouter);
router.use("/galeri", galeriRouter);
router.use("/kontak", kontakRouter);
router.use("/profil", profilRouter);
router.use("/program", programRouter);
module.exports = router;
