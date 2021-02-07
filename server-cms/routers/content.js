const express = require("express");
const router = express.Router();
const ContentController = require("../controllers/ContentController");
const UserController = require("../controllers/UserContentController");
const authentication = require("../middlewares/authenticationContent");
const authorization = require("../middlewares/authorizationContent");
const multer = require("multer");
const storage = require("../helpers/multer");

const upload = multer({ storage: storage });

router.post("/users/register", UserController.register);
router.post("/users/login", UserController.login);

router.get("/", ContentController.getAll);
router.get("/:id", ContentController.getOne);
router.post("/create", upload.single("image_url"), ContentController.create);
router.put("/:id", authorization, upload.single("image_url"), ContentController.update);
router.delete("/:id", authorization, ContentController.delete);

module.exports = router;
