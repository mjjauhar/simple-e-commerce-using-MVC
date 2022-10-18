const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController');

router.get('/', controller.admin);

router.get('/add-product', controller.addProductPage);

router.post('/add-product', controller.add);

router.get('/delete-product/:id', controller.delete);

router.get('/edit-product/:id', controller.showEditInfo);

router.post('/edit-product/:id', controller.edit);

module.exports = router;