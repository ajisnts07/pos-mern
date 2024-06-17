const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const fs = require('fs');
const path = require('path');
const Account = require('../models/account.model');
const Profile = require('../models/profile.model');
  
const indexProfile = async (req, res) => {
  try {
    const { size = 10, current = 1 } = req.query;
    const skip = (current - 1) * size;

    const [total, profiles] = await Promise.all([Profile.countDocuments(), Profile.find({}).skip(skip).limit(parseInt(size))]);

    const totalPages = Math.ceil(total / size);

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: profiles,
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

const showProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const profile = await Profile.
    findOne({ $or: [{ _id_account: id }, { _id: id }] }).lean();

    if (!profile) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: profile,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const storeProfile = async (req, res) => {
  try {
    const { id_account, ...rest } = req.body;
    const _id_account = new ObjectId(id_account);

    const profile = await Profile.create({ _id_account, ...rest });

    res.status(201).json({
      code: 201,
      status: 'Created',
      data: profile,
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

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_account, ...rest } = req.body;
    const _id_account = new ObjectId(id_account);

    const updatedProfile = await Profile.findByIdAndUpdate(id, { $set: { id_account: _id_account, ...rest } }, { new: true });

    if (!updatedProfile) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    res.status(201).json({
      code: 201,
      status: 'Created',
      data: updatedProfile,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const profile = await Profile.findById(id);

    if (!profile) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    if (profile.image) {
      const imagePath = path.join(__dirname, '..', 'uploads', 'avatar', profile.image);
      fs.unlink(imagePath, async () => {
        await Profile.findByIdAndDelete(id);
        await Account.findOneAndDelete({ _id: profile._id_account });
      });
    }

    await Profile.findByIdAndDelete(id);
    await Account.findOneAndDelete({ _id: profile._id_account });

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

module.exports = { indexProfile, showProfile, storeProfile, updateProfile, deleteProfile };
