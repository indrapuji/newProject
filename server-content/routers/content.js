const express = require("express");
const router = express.Router();
const ContentController = require("../controllers/ContentControllers");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const multer = require("multer");
const storage = require("../helpers/multer");

const upload = multer({ storage: storage });

router.get("/", ContentController.getAll);
router.get("/:id", ContentController.getOne);
authentication;
router.post("/create", upload.single("image_url"), ContentController.create);
router.put("/:id", authorization, upload.single("image_url"), ContentController.update);
router.delete("/:id", authorization, ContentController.delete);

module.exports = router;
