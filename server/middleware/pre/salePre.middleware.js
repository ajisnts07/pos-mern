const Customer = require('../../models/customer.model');
const Profile = require('../../models/profile.model');

const salePre = async function (next) {
  const saleData = this.getUpdate().$set;

  if (!saleData) {
    throw new Error('Document to update not found');
  }

  const customer = await Customer.findById(saleData.id_customer);
  if (!customer) {
    throw new Error('Associated customer not found');
  }

  const profile = await Profile.findById(saleData.id_profile);
  if (!profile) {
    throw new Error('Associated profile not found');
  }

  if (saleData.expedition_type && !['Dikirim', 'Diambil'].includes(saleData.expedition_type)) {
    throw new Error('Expedition Type must be either "Dikirim" or "Diambil"');
  }

  if (saleData.expedition_cost) {
    throw new Error('Expedition Cost must be a positive number');
  }

  const products = saleData.products;
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

  if (saleData.sub_total < 0) {
    throw new Error('Sub Total must be a positive number');
  }

  if (saleData.total_paid < 0) {
    throw new Error('Total Paid must be a positive number');
  }

  if (saleData.pay_type && !['Cash', 'QRIS', 'Transfer'].includes(saleData.pay_type)) {
    throw new Error('Pay Type must be either "Cash" or "QRIS" or "Transfer"');
  }

  if (saleData.pay_amount < 0) {
    throw new Error('Pay Amount must be a positive number');
  }

  if (saleData.change < 0) {
    throw new Error('Change must be a positive number');
  }

  next();
};

module.exports = salePre;
