const express = require('express');
const router = express.Router();
const { indexProduct, showProduct, storeProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');

router.get('/', indexProduct);
router.get('/:id', showProduct);
router.post('/', storeProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
