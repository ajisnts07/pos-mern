const bcrypt = require('bcrypt');
const Account = require('../models/account.model');
const Profile = require('../models/profile.model');
const multer = require('multer');
const upload = multer().any();
const fs = require('fs');
const path = require('path');

const indexAccount = async (req, res) => {
  try {
    const { size = 10, current = 1 } = req.query;
    const skip = (current - 1) * size;

    const [total, accounts] = await Promise.all([Account.countDocuments(), Account.find({}).skip(skip).limit(parseInt(size))]);

    const totalPages = Math.ceil(total / size);

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: accounts,
      page: {
        size: parseInt(size),
        total: total,
        totalPages: totalPages,
        current: parseInt(current),
      },
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const showAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const account = await Account.findById(id).lean();

    if (!account) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: account,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const storeAccount = async (req, res) => {
  try {
    const accountData = req.body;

    const account = await Account.create(accountData);

    res.status(201).json({
      code: 201,
      status: 'Created',
      data: account,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err) => err.message);

      res.status(400).json({
        code: 400,
        status: 'Bad Request',
        message: errors.join(', '),
      });
    } else {
      res.status(500).json({
        code: 500,
        status: 'Internal Server Error',
        message: error.message,
      });
    }
  }
};

const updateAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const accountData = req.body;

    if (accountData.password) {
      accountData.password = await bcrypt.hash(accountData.password, 10);
    }

    const updatedAccount = await Account.findByIdAndUpdate(id, { $set: accountData }, { new: true });

    if (!updatedAccount) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    res.status(201).json({
      code: 201,
      status: 'Created',
      data: updatedAccount,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const profile = await Profile.findOne({ _id_account: id });

    if (!profile) {
      await Account.findByIdAndDelete(id);

      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    if (profile.image) {
      const imagePath = path.join(__dirname, '..', 'uploads', 'avatar', profile.image);
      fs.unlink(imagePath, async () => {
        await Account.findByIdAndDelete(id);
        await Profile.findOneAndDelete({ _id_account: id });
      });
    }

    await Account.findByIdAndDelete(id);
    await Profile.findOneAndDelete({ _id_account: id });

    res.status(204).json({
      code: 204,
      status: 'No Content',
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

module.exports = { indexAccount, showAccount, storeAccount, updateAccount, deleteAccount };
