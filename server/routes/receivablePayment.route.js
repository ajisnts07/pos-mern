const express = require('express');
const router = express.Router();
const { indexReceivablePayment, showReceivablePayment, storeReceivablePayment, updateReceivablePayment, deleteReceivablePayment } = require('../controllers/receivablePayment.controller');

router.get('/', indexReceivablePayment);
router.get('/:id', showReceivablePayment);
router.post('/', storeReceivablePayment);
router.put('/:id', updateReceivablePayment);
router.delete('/:id', deleteReceivablePayment);

module.exports = router;
