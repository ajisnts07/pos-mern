const jwt = require('jsonwebtoken');
const Account = require('../models/account.model');

const authorization = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      code: 401,
      status: 'Unauthorized',
      message: 'Please login to access this resource',
    });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), 'secret_key');

    const account = await Account.findOne({ email: decoded.email });

    if (!account) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    req.account = account;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        code: 401,
        status: 'Unauthorized',
        message: 'Token expired, please log in again',
      });
    } else if (error.message === 'Forbidden') {
      return res.status(403).json({
        code: 403,
        status: 'Forbidden',
        message: error.message,
      });
    } else {
      return res.status(500).json({
        code: 500,
        status: 'Internal Server Error',
        message: error.message,
      });
    }
  }
};

module.exports = authorization;
