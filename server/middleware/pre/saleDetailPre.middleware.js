const Sale = require('../../models/sale.model');

const saleDetailPre = async function (next) {
  const saleDetailData = this.getUpdate().$set;

  if (!saleDetailData) {
    throw new Error('Document to update not found');
  }

  const products = saleDetailData.products;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.quantity < 0) {
      throw new Error('Quantity must be a positive number');
    }

    if (product.unit && !['Sak', 'Galon', 'Buah', 'Kardus', 'Lembar', 'Kaleng', 'Batang', 'Kilogram', 'Meter'].includes(product.unit)) {
      throw new Error('Unit must be either "Sak" or "Galon" or "Buah" or "Kardus" or "Lembar" or "Kaleng" or "Batang" or "Kilogram" or "Meter"');
    }

    if (product.price < 0) {
      throw new Error('Price must be a positive number');
    }
  }
  next();
};

module.exports = saleDetailPre;
