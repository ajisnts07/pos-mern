const mongoose = require('mongoose');
const profilePre = require('../middleware/pre/profilePre.middleware');
const validationError = require('../middleware/validationError.middleware');
const profileSave = require('../middleware/save/profileSave.middleware');

const profileSchema = new mongoose.Schema(
  {
    _id_account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account',
      required: [true, 'Id Account is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
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
    position: {
      type: String,
      enum: ['Owner', 'Cashier'],
      required: [true, 'Position is required'],
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
        ret.id_account = ret._id_account;
        delete ret._id;
        delete ret._id_account;
      },
    },
  }
);

profileSchema.pre('findOneAndUpdate', profilePre);
// profileSchema.pre('save', profileSave);

const Profile = mongoose.model('profiles', profileSchema);

module.exports = Profile;
