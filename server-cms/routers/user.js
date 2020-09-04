const router = require('express').Router();
const UserController = require('../controllers/UserController');
const authentication = require('../middlewares/authentication');
const { superAdminAuth } = require('../middlewares/authorization');

router.post('/login', UserController.login);
router.post('/super/register-admin', authentication, superAdminAuth, UserController.addUserAdmin);
router.delete('/super/delete-user/:id', authentication, superAdminAuth, UserController.deleteUser);

module.exports = router;
