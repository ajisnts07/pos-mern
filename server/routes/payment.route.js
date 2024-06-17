const express = require('express');
const router = express.Router();
const { indexPayment, showPayment } = require('../controllers/payment.controller');

router.get('/', indexPayment);
router.get('/:id_sale', showPayment);

module.exports = router;
