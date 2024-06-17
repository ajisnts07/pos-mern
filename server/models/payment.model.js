const mongoose = require('mongoose');
const paymentPre = require('../middleware/pre/paymentPre.middleware');

const paymentSchema = new mongoose.Schema(
  {
    _id_sale: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sale',
      required: [true, 'Id Sale is required'],
    },
    sale_date: {
      type: Date,
      required: [true, 'Sale Date is required'],
    },
    total_paid: {
      type: Number,
      min: [0, 'Total Paid must be a positive number'],
      required: [true, 'Total Paid is required'],
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
    change: {
      type: Number,
      min: [0, 'Change must be a positive number'],
      required: false,
    },
  },
  {
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id_sale = ret._id_sale;
        delete ret._id;
        delete ret._id_sale;
      },
    },
  }
);

paymentSchema.pre('findOneAndUpdate', paymentPre);

const Payment = mongoose.model('payments', paymentSchema);

module.exports = Payment;
