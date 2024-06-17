const express = require('express');
const router = express.Router();
const { indexSaleDetail, showSaleDetail } = require('../controllers/saleDetail.controller');

router.get('/', indexSaleDetail);
router.get('/:id_sale', showSaleDetail);

module.exports = router;
