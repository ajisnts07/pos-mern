const mongoose = require('mongoose');
const customerPre = require('../middleware/pre/customerPre.middleware');

const customerSchema = new mongoose.Schema(
  {
    customer_name: {
      type: String,
      required: [true, 'Customer Name is required'],
    },
    gender: {
      type: String,
      enum: ['Pria', 'Wanita'],
      required: [true, 'Gender is required'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    phone_number: {
      type: String,
      required: [true, 'Phone Number is required'],
      minLength: [12, 'Phone Number must be at least 12 characters long'],
      maxLength: [13, 'Phone Number can only be a maximum of 13 characters'],
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

customerSchema.pre('findOneAndUpdate', customerPre);

const Customer = mongoose.model('customers', customerSchema);

module.exports = Customer;
