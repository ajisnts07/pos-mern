const express = require('express');
const router = express.Router();
const { indexPurchaseReturn, showPurchaseReturn, storePurchaseReturn, updatePurchaseReturn, deletePurchaseReturn } = require('../controllers/purchaseReturn.controller');

router.get('/', indexPurchaseReturn);
router.get('/:id', showPurchaseReturn);
router.post('/', storePurchaseReturn);
router.put('/:id', updatePurchaseReturn);
router.delete('/:id', deletePurchaseReturn);

module.exports = router;
