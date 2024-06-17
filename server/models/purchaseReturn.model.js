const mongoose = require('mongoose');
const purchaseReturnPre = require('../middleware/pre/purchaseReturnPre.middleware');

const purchaseReturnSchema = new mongoose.Schema(
  {
    _id_purchase: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Purchase',
      required: [true, 'Id Purchase is required'],
    },
    return_date: {
      type: Date,
      required: [true, 'Return Date is required'],
    },
    _id_supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supplier',
      required: [true, 'Id Supplier is required'],
    },
    supplier_name: {
      type: String,
      required: [true, 'Supplier Name is required'],
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
    products: [
      {
        _id_product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        product_name: {
          type: String,
          required: [true, 'Product Name is required'],
        },
        category: {
          type: String,
          enum: ['Material Bangunan', 'Alat Bangunan', 'Peralatan Listrik', 'Pintu dan Jendela', 'Lantai dan Dinding', 'Atap dan Genteng', 'Dekorasi'],
          required: false,
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
        purchase_price: {
          type: Number,
          min: [0, 'Purchase Price must be a positive number'],
          required: [true, 'Purchase Price is required'],
        },
      },
    ],
    sub_total: {
      type: Number,
      min: [0, 'Sub Total must be a positive number'],
      required: [true, 'Sub Total is required'],
    },
    pay_type: {
      type: String,
      enum: ['Cash', 'QRIS', 'Transfer'],
      required: [true, 'Pay Type is required'],
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
        ret.id_purchase = ret._id_purchase;
        ret.id_supplier = ret._id_supplier;
        ret.id_profile = ret._id_profile;
        ret.products.forEach((product) => {
          product.id_product = product._id;
          delete product._id;
        });
        delete ret._id;
        delete ret._id_purchase;
        delete ret._id_supplier;
        delete ret._id_profile;
      },
    },
  }
);

purchaseReturnSchema.pre('findOneAndUpdate', purchaseReturnPre);

const PurchaseReturn = mongoose.model('purchase_returns', purchaseReturnSchema);

module.exports = PurchaseReturn;
