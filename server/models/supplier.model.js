const mongoose = require('mongoose');
const supplierPre = require('../middleware/pre/supplierPre.middleware');

const supplierSchema = new mongoose.Schema(
  {
    supplier_name: {
      type: String,
      required: [true, 'Supplier Name is required'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    contact_person: {
      type: String,
      required: [true, 'Contact Person is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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

supplierSchema.pre('findOneAndUpdate', supplierPre);

const Supplier = mongoose.model('suppliers', supplierSchema);

module.exports = Supplier;
