const Sale = require('../../models/sale.model');
const Customer = require('../../models/customer.model');
const Profile = require('../../models/profile.model');

const receivablePre = async function (next) {
  const receivableData = this.getUpdate().$set;

  if (!receivableData) {
    throw new Error('Document to update not found');
  }

  const sale = await Sale.findById(receivableData.id_sale);
  if (!sale) {
    throw new Error('Associated sale not found');
  }

  const customer = await Customer.findById(receivableData.id_customer);
  if (!customer) {
    throw new Error('Associated customer not found');
  }

  const profile = await Profile.findById(receivableData.id_profile);
  if (!profile) {
    throw new Error('Associated profile not found');
  }

  if (receivableData.total_receivable < 0) {
    throw new Error('Total Receivable must be a positive number');
  }

  if (receivableData.total_payment < 0) {
    throw new Error('Total Payment must be a positive number');
  }

  if (receivableData.remaining_payment < 0) {
    throw new Error('Remaining Payment must be a positive number');
  }

  if (receivableData.status && !['Belum Lunas', 'Lunas', 'Jatuh Tempo', 'Penagihan', 'Ditangguhkan'].includes(receivableData.status)) {
    throw new Error('Status must be either "Belum Lunas" or "Lunas" or "Jatuh Tempo" or "Penagihan" or "Ditangguhkan"');
  }

  next();
};

module.exports = receivablePre;
