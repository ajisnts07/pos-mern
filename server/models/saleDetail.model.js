const mongoose = require('mongoose');
const saleDetailPre = require('../middleware/pre/saleDetailPre.middleware');

const saleDetailSchema = new mongoose.Schema(
  {
    _id_sale: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sale',
      required: [true, 'Id Sale is required'],
    },
    products: [
      {
        _id_products: {
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
  },
  {
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id_sale = ret._id_sale;
        ret.products.forEach((product) => {
          product.id_product = product._id;
          delete product._id;
        });
        delete ret._id;
        delete ret._id_sale;
      },
    },
  }
);

saleDetailSchema.pre('findOneAndUpdate', saleDetailPre);

const SaleDetail = mongoose.model('sale_details', saleDetailSchema);

module.exports = SaleDetail;
