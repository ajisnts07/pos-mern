const checkRole = (req, res, next) => {
  try {
    const { role } = req.account;

    if (role !== 'Admin') {
      return res.status(403).json({
        code: 403,
        status: 'Forbidden',
        message: 'You do not have permission to access this resource',
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

module.exports = checkRole;
