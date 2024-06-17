const customerPre = async function (next) {
  const customerData = this.getUpdate().$set;

  if (!customerData) {
    throw new Error('Document to update not found');
  }

  if (customerData.gender && !['Pria', 'Wanita'].includes(customerData.gender)) {
    throw new Error('Gender must be either "Pria" or "Wanita"');
  }

  const phoneLength = customerData.phone_number.replace(/\D/g, '').length;
  if (phoneLength < 12 || phoneLength > 13) {
    throw new Error('Invalid phone number length');
  }

  next();
};

module.exports = customerPre;
