const Account = require('../../models/account.model');

const profilePre = async function (next) {
  const profileData = this.getUpdate().$set;

  if (!profileData) {
    throw new Error('Document to update not found');
  }

  const account = await Account.findById(profileData.id_account);
  if (!account) {
    throw new Error('Associated account not found');
  }

  if (profileData.gender && !['Pria', 'Wanita'].includes(profileData.gender)) {
    throw new Error('Gender must be either "Pria" or "Wanita"');
  }

  const phoneLength = profileData.phone_number.replace(/\D/g, '').length;
  if (phoneLength < 12 || phoneLength > 13) {
    throw new Error('Invalid phone number length');
  }

  if (profileData && profileData.position && !['Pemilik', 'Kasir'].includes(profileData.position)) {
    throw new Error('Position must be either "Pemilik" or "Kasir"');
  }

  next();
};

module.exports = profilePre;
