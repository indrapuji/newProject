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
router.post("/create", authentication, upload.single("image_url"), ContentController.create);
router.put("/:id", authentication, authorization, upload.single("image_url"), ContentController.update);
router.delete("/:id", authentication, authorization, ContentController.delete);

module.exports = router;
