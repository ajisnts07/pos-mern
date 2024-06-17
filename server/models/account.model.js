const mongoose = require('mongoose');
const accountSave = require('../middleware/save/accountSave.middleware');
const accountPre = require('../middleware/pre/accountPre.middleware');

const accountSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: [6, 'Password must be at least 6 characters long'],
    },
    role: {
      type: String,
      enum: ['Admin', 'User'],
      required: [true, 'Role is required'],
    },
  },
  {
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

accountSchema.pre('save', accountSave);
accountSchema.pre('findOneAndUpdate', accountPre);

const Account = mongoose.model('accounts', accountSchema);

module.exports = Account;
