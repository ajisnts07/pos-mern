const validationError = function (error, doc, next) {
  if (error.name === 'ValidationError') {
    const errors = Object.values(error.errors).map((err) => err.message);

    return next({
      code: 400,
      status: 'Bad Request',
      message: errors.join(', '),
    });
  } else {
    return next(error);
  }
};

module.exports = validationError;
