const express = require('express');
const router = express.Router();
const { indexReceivable, showReceivable, storeReceivable, updateReceivable, deleteReceivable } = require('../controllers/receivable.controller');

router.get('/', indexReceivable);
router.get('/:id', showReceivable);
router.post('/', storeReceivable);
router.put('/:id', updateReceivable);
router.delete('/:id', deleteReceivable);

module.exports = router;
