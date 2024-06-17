const mongoose = require('mongoose');
const purchasePre = require('../middleware/pre/purchasePre.middleware');

const purchaseSchema = new mongoose.Schema(
  {
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
    purchase_date: {
      type: Date,
      required: [true, 'Purchase Date is required'],
    },
    received_date: {
      type: Date,
      required: false,
    },
    products: [
      {
        _id_product: {
          type: mongoose.Schema.Types.ObjectId,
        },
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
        purchase_price: {
          type: Number,
          min: [0, 'Purchase Price must be a positive number'],
          required: [true, 'Purchase Price is required'],
        },
        image: {
          type: String,
          validate: {
            validator: function (v) {
              return /^(https?:\/\/.*\.(?:png|jpg|jpeg))$/.test(v);
            },
            message: (props) => `${props.value} is not a valid image`,
          },
          required: false,
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
        ret.id_supplier = ret._id_supplier;
        ret.id_profile = ret._id_profile;
        ret.products.forEach((product) => {
          product.id_product = product._id;
          delete product._id;
        });
        delete ret._id;
        delete ret._id_supplier;
        delete ret._id_profile;
      },
    },
  }
);

purchaseSchema.pre('findOneAndUpdate', purchasePre);

const Purchase = mongoose.model('purchases', purchaseSchema);

module.exports = Purchase;
