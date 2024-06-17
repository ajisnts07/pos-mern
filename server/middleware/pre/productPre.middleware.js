const productPre = async function (next) {
  const productData = this.getUpdate().$set;

  if (productData && productData.category && !['Material Bangunan', 'Alat Bangunan', 'Peralatan Listrik', 'Pintu dan Jendela', 'Lantai dan Dinding', 'Atap dan Genteng', 'Dekorasi'].includes(productData.category)) {
    throw new Error('Category must be either "Material Bangunan" or "Alat Bangunan" or "Peralatan Listrik" or "Pintu dan Jendela" or "Lantai dan Dinding" or "Atap dan Genteng" or "Dekorasi"');
  }

  if (productData && productData.quantity < 0) {
    throw new Error('Quantity must be a positive number');
  }

  if (productData && productData.unit && !['Sak', 'Galon', 'Buah', 'Kardus', 'Lembar', 'Kaleng', 'Batang', 'Kilogram', 'Meter'].includes(productData.unit)) {
    throw new Error('Unit must be either "Sak" or "Galon" or "Buah" or "Kardus" or "Lembar" or "Kaleng" or "Batang" or "Kilogram" or "Meter"');
  }

  if (productData && productData.price < 0) {
    throw new Error('Price must be a positive number');
  }

  if (productData && productData.purchase_price < 0) {
    throw new Error('Purchase Price must be a positive number');
  }

  next();
};

module.exports = productPre;
