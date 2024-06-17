const mongoose = require('mongoose');
const receivablePre = require('../middleware/pre/receivablePre.middleware');

const receivableSchema = new mongoose.Schema(
  {
    _id_sale: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sale',
      required: [true, 'Id Sale is required'],
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
    receivable_date: {
      type: Date,
      required: [true, 'Receivable Date is required'],
    },
    total_receivable: {
      type: Number,
      min: [0, 'Total Receivable must be a positive number'],
      required: [true, 'Total Receivable is required'],
    },
    total_payment: {
      type: Number,
      min: [0, 'Total Payment must be a positive number'],
      required: [true, 'Total Payment is required'],
    },
    remaining_payment: {
      type: Number,
      min: [0, 'Remaining Payment must be a positive number'],
      required: [true, 'Remaining Payment is required'],
    },
    due_date: {
      type: Date,
      required: [true, 'Due Date is required'],
    },
    status: {
      type: String,
      enum: ['Belum Lunas', 'Lunas', 'Jatuh Tempo', 'Penagihan', 'Ditangguhkan'],
      default: 'Belum Lunas',
      required: false,
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
        ret.id_sale = ret._id_sale;
        ret.id_customer = ret._id_customer;
        ret.id_profile = ret._id_profile;
        delete ret._id;
        delete ret._id_sale;
        delete ret._id_customer;
        delete ret._id_profile;
      },
    },
  }
);

receivableSchema.pre('findByIdAndUpdate', receivablePre);

const Receivable = mongoose.model('receivables', receivableSchema);

module.exports = Receivable;
