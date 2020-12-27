const router = require("express").Router();
const UserController = require("../controllers/UserController");
const authentication = require("../middlewares/authentication");
const { superAdminAuth, adminAuth } = require("../middlewares/authorization");

router.post("/login/anggota", UserController.loginAnggota);
router.post("/login/admin", UserController.loginAdmin);
router.post("/super/register-admin", authentication, superAdminAuth, UserController.addUserAdmin);
router.delete("/super/delete-user", authentication, superAdminAuth, UserController.deleteUser);
router.post("/super/pengkinian-data", UserController.addAnggota);
router.get("/profile", authentication, UserController.userProfile);
router.get("/daftar-anggota", authentication, adminAuth, UserController.getAnggota);
router.get("/daftar-anggota/:id", authentication, adminAuth, UserController.getAnggotaId);
router.put("/edit-anggota", authentication, UserController.editUser);

module.exports = router;
