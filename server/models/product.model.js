const mongoose = require('mongoose');
const productPre = require('../middleware/pre/productPre.middleware');
const profileSave = require('../middleware/save/profileSave.middleware');

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: [true, 'Product Name is require'],
    },
    category: {
      type: String,
      enum: ['Material Bangunan', 'Alat Bangunan', 'Peralatan Listrik', 'Pintu dan Jendela', 'Lantai dan Dinding', 'Atap dan Genteng', 'Dekorasi'],
      required: false,
    },
    quantity: {
      type: Number,
      validate: {
        validator: function (v) {
          return v >= 0;
        },
        message: 'Quantity must be a positive number',
      },
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
    purchase_price: {
      type: Number,
      min: [0, 'Purchase Price must be a positive number'],
      required: [true, 'Purchase Price is required'],
    },
    image: {
      type: String,
      validate: {
        validator: function (v) {
          return /\.(png|jpg|jpeg)$/.test(v);
        },
        message: (props) => `${props.value} is not a valid image`,
      },
      required: false,
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

productSchema.pre('findOneAndUpdate', productPre);
// productSchema.pre('save', profileSave);

const Product = mongoose.model('products', productSchema);

module.exports = Product;
