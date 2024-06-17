const Purchase = require('../../models/purchase.model');
const Supplier = require('../../models/supplier.model');
const Profile = require('../../models/profile.model');

const purchaseReturnPre = async function (next) {
  const purchaseReturnData = this.getUpdate().$set;

  const purchase = await Purchase.findById(purchaseReturnData.id_purchase);
  if (!purchase) {
    throw new Error('Associated purchase not found');
  }

  const supplier = await Supplier.findById(purchaseReturnData.id_supplier);
  if (!supplier) {
    throw new Error('Associated supplier not found');
  }

  const profile = await Profile.findById(purchaseReturnData.id_profile);
  if (!profile) {
    throw new Error('Associated profile not found');
  }

  const products = purchaseReturnData.products;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.category && !['Material Bangunan', 'Alat Bangunan', 'Peralatan Listrik', 'Pintu dan Jendela', 'Lantai dan Dinding', 'Atap dan Genteng', 'Dekorasi'].includes(product.category)) {
      throw new Error('Category must be either "Material Bangunan" or "Alat Bangunan" or "Peralatan Listrik" or "Pintu dan Jendela" or "Lantai dan Dinding" or "Atap dan Genteng" or "Dekorasi"');
    }

    if (product.quantity < 0) {
      throw new Error('Quantity must be a positive number');
    }

    if (product.unit && !['Sak', 'Galon', 'Buah', 'Kardus', 'Lembar', 'Kaleng', 'Batang', 'Kilogram', 'Meter'].includes(product.unit)) {
      throw new Error('Unit must be either "Sak" or "Galon" or "Buah" or "Kardus" or "Lembar" or "Kaleng" or "Batang" or "Kilogram" or "Meter"');
    }

    if (product.price < 0) {
      throw new Error('Price must be a positive number');
    }

    if (product.purchase_price < 0) {
      throw new Error('Purchase Price must be a positive number');
    }
  }

  if (purchaseReturnData.sub_total < 0) {
    throw new Error('Sub Total must be a positive number');
  }

  if (purchaseReturnData.pay_type && !['Cash', 'QRIS', 'Transfer'].includes(purchaseReturnData.pay_type)) {
    throw new Error('Pay Type must be either "Cash" or "QRIS" or "Transfer"');
  }

  next();
};

module.exports = purchaseReturnPre;
