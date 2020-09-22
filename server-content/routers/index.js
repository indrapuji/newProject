const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserControllers");
const ContentRouter = require("../routers/content");


router.get("/", (req, res) => res.json({ message: "Content Jatisejahtera" }));

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.use("/content", ContentRouter);

module.exports = router;
