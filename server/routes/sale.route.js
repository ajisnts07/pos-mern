const express = require('express');
const router = express.Router();
const { indexSale, showSale, storeSale, updateSale, deleteSale } = require('../controllers/sale.controller');

router.get('/', indexSale);
router.get('/:id', showSale);
router.post('/', storeSale);
router.put('/:id', updateSale);
router.delete('/:id', deleteSale);

module.exports = router;
