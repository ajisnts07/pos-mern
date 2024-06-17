const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Cookies = require('js-cookie');
const multer = require('multer');
const nodemailer = require('nodemailer');
const Account = require('../models/account.model');
const Profile = require('../models/profile.model');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/avatar/');
  },
  filename: function (req, file, cb) {
    const originalname = file.originalname;
    const filename = originalname.toLocaleLowerCase().replace(/\s+/g, '');

    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const account = await Account.findOne({ email: email }).select('+password');

    if (!account || !(await bcrypt.compare(password, account.password))) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Invalid email or password',
      });
    }

    const token = jwt.sign({ email: email }, 'secret_key', { expiresIn: '8h' });
    Cookies.set('token', token);

    res.status(200).json({
      code: 200,
      status: 'Ok',
      token: token,
      id: account.id,
      role: account.role,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const register = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await upload.single('image')(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      const account = await Account.create(
        [
          {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
          },
        ],
        { session }
      );

      const profileData = {
        _id_account: account[0]._id,
        name: req.body.name,
        gender: req.body.gender,
        address: req.body.address,
        phone_number: req.body.phone_number,
        position: req.body.position,
      };

      if (req.file) {
        profileData.image = req.file.filename;
      }

      const profile = await Profile.create([profileData], { session });

      await session.commitTransaction();
      session.endSession();

      res.status(201).json({
        code: 201,
        status: 'Created',
        data: {
          account: account[0],
          profile: profile[0],
        },
      });
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

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

const forgotPassword = async (req, res) => {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendResetPasswordEmail = async (email, id_account) => {
    const token = jwt.sign({ email: email }, 'secret_key', { expiresIn: '1h' });

    const APP_URL = process.env.APP_URL;
    const MAIL_USER = process.env.MAIL_USER;
    const MAIL_PASS = process.env.MAIL_PASS;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: `${MAIL_USER}`,
        pass: `${MAIL_PASS}`,
      },
    });

    let mailOptions = {
      from: `${MAIL_USER}`,
      to: email,
      subject: 'Reset Password | Point of Sales Karya Pembangunan',
      text: `Click the following link to reset your password: ${APP_URL}/auth/reset-password?rpid00=${id_account}&token=${token}`,
    };

    await transporter.sendMail(mailOptions);

    return token;
  };

  try {
    const { email } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({
        code: 400,
        status: 'Bad Request',
        message: 'Invalid email format',
      });
    }

    const account = await Account.findOne({ email: email });

    if (!account) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    const id_account = account._id;
    await sendResetPasswordEmail(email, id_account);

    res.status(200).json({
      code: 200,
      status: 'Ok',
      message: 'Reset password email sent',
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const id = req.query.rpid00;
    const token = req.query.token;
    let new_password = req.body.new_password;

    const account = await Account.findById(id);
    if (!account) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    const decoded = jwt.verify(token, 'secret_key');
    if (!decoded) {
      return res.status(401).json({
        code: 401,
        status: 'Unauthorized',
      });
    }

    if (new_password) {
      new_password = await bcrypt.hash(new_password, 10);
    }

    const id_account = account._id;
    const updatedAccount = await Account.findByIdAndUpdate(id_account, { $set: { email: account.email, password: new_password, role: account.role } }, { new: true });

    res.status(201).json({
      code: 201,
      status: 'Created',
      data: updatedAccount,
    });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        code: 401,
        status: 'Unauthorized',
        message: 'Token expired',
      });
    } else if (error.message === 'Forbidden') {
      return res.status(403).json({
        code: 403,
        status: 'Forbidden',
        message: error.message,
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

const logout = async (req, res) => {
  try {
    Cookies.remove('token');

    res.status(200).json({
      code: 200,
      status: 'Ok',
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

module.exports = { login, register, forgotPassword, resetPassword, logout };
