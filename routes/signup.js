const express = require('express');
const router = express.Router();
const controller = require('../controllers/signupController');

router.get('/signup', controller.signupPage);

router.post('/signup', controller.signup);

module.exports = router;