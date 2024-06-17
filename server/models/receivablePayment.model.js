const mongoose = require('mongoose');
const receivablePaymentPre = require('../middleware/pre/receivablePaymentPre.middleware');

const receivablePaymentSchema = new mongoose.Schema(
  {
    _id_receivable: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Receivable',
      required: [true, 'Id Receivable is required'],
    },
    _id_customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: [true, 'Id Customer is required'],
    },
    customer_name: {
      type: String,
      required: [true, 'Customer Name is required'],
    },
    _id_profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile',
      required: [true, 'Id Profile is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    remaining_payment: {
      type: Number,
      min: [0, 'Remaining Payment must be a positive number'],
      required: [true, 'Remaining Payment is required'],
    },
    payment_date: {
      type: Date,
      required: [true, 'Payment Date is required'],
    },
    pay_type: {
      type: String,
      enum: ['Cash', 'QRIS', 'Transfer'],
      required: [true, 'Pay Type is required'],
    },
    pay_amount: {
      type: Number,
      min: [0, 'Pay Amount must be a positive number'],
      required: [true, 'Pay Amount is required'],
    },
    information: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        ret.id_receivable = ret._id_receivable;
        ret.id_customer = ret._id_customer;
        ret.id_profile = ret._id_profile;
        delete ret._id;
        delete ret._id_receivable;
        delete ret._id_customer;
        delete ret._id_profile;
      },
    },
  }
);

receivablePaymentSchema.pre('findOneAndUpdate', receivablePaymentPre);

const ReceivablePayment = mongoose.model('receivable_payments', receivablePaymentSchema);

module.exports = ReceivablePayment;
