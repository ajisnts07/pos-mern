const express = require('express');
const router = express.Router();
const { indexPurchase, showPurchase, storePurchase, updatePurchase, deletePurchase } = require('../controllers/purchase.controller');

router.get('/', indexPurchase);
router.get('/:id', showPurchase);
router.post('/', storePurchase);
router.put('/:id', updatePurchase);
router.delete('/:id', deletePurchase);

module.exports = router;
