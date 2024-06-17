const checkSession = (req, res, next) => {
  if (req.session.email) {
    next();
  } else {
    res.status(401).json({
      code: 401,
      status: 'Unauthorized',
      message: 'Please login to access this resource',
    });
  }
};

module.exports = checkSession;
