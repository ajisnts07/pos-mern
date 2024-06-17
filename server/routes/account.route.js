const express = require('express');
const router = express.Router();
const { indexAccount, showAccount, storeAccount, updateAccount, deleteAccount } = require('../controllers/account.controller');

router.get('/', indexAccount);
router.get('/:id', showAccount);
router.post('/', storeAccount);
router.put('/:id', updateAccount);
router.delete('/:id', deleteAccount);

module.exports = router;
