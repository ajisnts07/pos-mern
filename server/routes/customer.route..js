const express = require('express');
const router = express.Router();
const { indexCustomer, showCustomer, storeCustomer, updateCustomer, deleteCustomer } = require('../controllers/customer.controller');

router.get('/', indexCustomer);
router.get('/:id', showCustomer);
router.post('/', storeCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
