const Sale = require('../../models/sale.model');

const paymentPre = async function (next) {
  const paymentData = this.getUpdate().$set;

  if (!paymentData) {
    throw new Error('Document to update not found');
  }

  if (paymentData.total_paid < 0) {
    throw new Error('Total Paid must be a positive number');
  }

  if (paymentData.pay_type && !['Cash', 'QRIS', 'Transfer'].includes(paymentData.pay_type)) {
    throw new Error('Pay Type must be either "Cash" or "QRIS" or "Transfer"');
  }

  if (paymentData.pay_amount < 0) {
    throw new Error('Pay Amount must be a positive number');
  }

  if (paymentData.change < 0) {
    throw new Error('Change must be a positive number');
  }

  next();
};

module.exports = paymentPre;
