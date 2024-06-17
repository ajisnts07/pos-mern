const productSave = async function (next) {
  const product = this;

  if (!product.isModified('image')) {
    return next();
  }

  if (!product.image) {
    return next();
  }

  if (!/^(https?:\/\/.*\.(?:png|jpg|jpeg))$/.test(product.image)) {
    return next(new Error(`${product.image} is not a valid image URL`));
  }

  next();
};

module.exports = productSave;
