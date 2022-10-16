const express = require('express');
const router = express.Router();
const controller = require('../controllers/loginController');

router.get('/', controller.loginPage);

router.post('/', controller.login);

router.get('/logout', controller.logout)

module.exports = router;