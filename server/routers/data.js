const express = require('express')
const router = express.Router()
const DataController = require('../controllers/DataController');


router.get("/", DataController.getData);
router.post('/', DataController.addData);
module.exports = router