const profileSave = async function (next) {
  const profile = this;

  if (!profile.isModified('image')) {
    return next();
  }

  if (!profile.image) {
    return next();
  }

  if (!/\.(png|jpg|jpeg)$/.test(profile.image)) {
    return next(new Error(`${profile.image} is not a valid image URL`));
  }

  next();
};

module.exports = profileSave;
