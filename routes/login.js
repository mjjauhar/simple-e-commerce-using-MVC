const express = require('express');
const router = express.Router();
const controller = require('../controllers/loginController');

router.get('/login', controller.loginPage);

router.post('/login', controller.login);

module.exports = router;