const express = require("express");
const router = express.Router();
const ContentController = require("../controllers/ContentControllers");
const authorization = require("../middlewares/authorization");

router.get("/", ContentController.getAll);
router.get("/:id", ContentController.getOne);
router.post("/", ContentController.create);
router.put("/:id", authorization, ContentController.update);
router.delete("/:id", authorization, ContentController.delete);

module.exports = router;
