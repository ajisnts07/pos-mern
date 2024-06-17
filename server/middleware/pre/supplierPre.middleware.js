const supplierPre = async function (next) {
  const supplierData = this.getUpdate().$set;

  if (!supplierData) {
    throw new Error('Document to update not found');
  }

  const email = supplierData.email;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Invalid email format');
  }

  const phoneLength = supplierData.phone_number.replace(/\D/g, '').length;
  if (phoneLength < 12 || phoneLength > 13) {
    throw new Error('Invalid phone number length');
  }

  next();
};

module.exports = supplierPre;
