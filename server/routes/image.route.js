const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/products/:filename', (req, res) => {
  const { filename } = req.params;
  const imagePath = path.join(__dirname, '..', 'uploads', 'product', filename);

  res.sendFile(imagePath);
});

module.exports = router;
