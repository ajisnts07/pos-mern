const bcrypt = require('bcrypt');

const accountSave = async function (next) {
  const account = this;

  if (!account.isModified('password')) return next();

  if (/^\s*$/.test(account.password)) return next(new Error('Password cannot be empty or contain only spaces'));

  try {
    const hashedPassword = await bcrypt.hash(account.password, 10);
    account.password = hashedPassword;
  } catch (error) {
    return next(error);
  }
};

module.exports = accountSave;
