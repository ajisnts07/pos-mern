const mongoose = require('mongoose');
const salePre = require('../middleware/pre/salePre.middleware');
const validationError = require('../middleware/validationError.middleware');

const saleSchema = new mongoose.Schema(
  {
    _id_customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: false,
    },
    customer_name: {
      type: String,
      required: false,
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
    sale_date: {
      type: Date,
      required: [true, 'Sale Date is required'],
    },
    expedition_type: {
      type: String,
      enum: ['Dikirim', 'Diambil'],
      default: 'Dikirim',
      required: [true, 'Expedition Type is required'],
    },
    expedition_cost: {
      type: Number,
      min: [0, 'Expedition Cost must be a positive number'],
      required: false,
    },
    products: [
      {
        _id_product: {
          type: mongoose.Schema.Types.ObjectId,
        },
        product_name: {
          type: String,
          required: [true, 'Product Name is required'],
        },
        quantity: {
          type: Number,
          min: [0, 'Quantity must be a positive number'],
          required: [true, 'Quantity is required'],
        },
        unit: {
          type: String,
          enum: ['Sak', 'Galon', 'Buah', 'Kardus', 'Lembar', 'Kaleng', 'Batang', 'Kilogram', 'Meter'],
          default: 'Buah',
          required: false,
        },
        price: {
          type: Number,
          min: [0, 'Price must be a positive number'],
          required: [true, 'Price is required'],
        },
      },
    ],
    sub_total: {
      type: Number,
      min: [0, 'Sub Total must be a positive number'],
      required: [true, 'Sub Total is required'],
    },
    discount: {
      type: Number,
      min: [0, 'Discount must be a positive number'],
      max: [100, 'Discount cannot be more than 100%'],
      required: false,
      validate: {
        validator: function (value) {
          if (value !== undefined && value !== null) {
            const regex = /^\d+(\.\d{1,2})?$/;
            return regex.test(value.toString());
          }
          return true;
        },
        message: 'Discount must be have exactly 2 decimal places',
      },
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
        ret.id_customer = ret._id_customer;
        ret.id_profile = ret._id_profile;
        ret.products.forEach((product) => {
          product.id_product = product._id;
          delete product._id;
        });
        delete ret._id;
        delete ret._id_customer;
        delete ret._id_profile;
      },
    },
  }
);

saleSchema.pre('findOneAndUpdate', salePre);

const Sale = mongoose.model('sales', saleSchema);

module.exports = Sale;
