const Receivable = require('../../models/receivable.model');
const Customer = require('../../models/customer.model');
const Profile = require('../../models/profile.model');

const receivablePaymentPre = async function (next) {
  const receivablePaymentData = this.getUpdate().$set;

  // if (!receivablePaymentData) {
  //   throw new Error('Document to update not found');
  // }

  const receivable = await Receivable.findById(receivablePaymentData.id_receivable);
  if (!receivable) {
    throw new Error('Associated receivable not found');
  }

  const customer = await Customer.findById(receivablePaymentData.id_customer);
  if (!customer) {
    throw new Error('Associated customer not found');
  }

  const profile = await Profile.findById(receivablePaymentData.id_profile);
  if (!profile) {
    throw new Error('Associated profile not found');
  }

  if (receivablePaymentData.remaining_payment < 0) {
    throw new Error('Remaining Payment must be a positive number');
  }

  if (receivablePaymentData.pay_type && !['Cash', 'QRIS', 'Transfer'].includes(receivablePaymentData.pay_type)) {
    throw new Error('Pay Type must be either "Cash" or "QRIS" or "Transfer"');
  }

  if (receivablePaymentData.pay_amount < 0) {
    throw new Error('Pay Amount must be a positive number');
  }

  next();
};

module.exports = receivablePaymentPre;
