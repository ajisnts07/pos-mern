const express = require('express');
const router = express.Router();
const { indexSupplier, showSupplier, storeSupplier, updateSupplier, deleteSupplier } = require('../controllers/supplier.controller');

router.get('/', indexSupplier);
router.get('/:id', showSupplier);
router.post('/', storeSupplier);
router.put('/:id', updateSupplier);
router.delete('/:id', deleteSupplier);

module.exports = router;
