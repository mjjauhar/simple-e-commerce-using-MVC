const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController');

router.get('/admin', controller.admin);

module.exports = router;