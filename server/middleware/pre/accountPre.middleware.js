const accountPre = async function (next) {
  const accountData = this.getUpdate().$set;

  if (!accountData) {
    throw new Error('Document to update not found');
  }

  const email = accountData.email;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Invalid format email');
  }

  if (accountData.password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }

  if (accountData.role && !['Admin', 'User'].includes(accountData.role)) {
    throw new Error('Role must be either "Admin" or "User"');
  }

  next();
};

module.exports = accountPre;
