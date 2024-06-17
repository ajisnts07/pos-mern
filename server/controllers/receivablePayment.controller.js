const { ObjectId } = require('mongodb');
const ReceivablePayment = require('../models/receivablePayment.model');
const Receivable = require('../models/receivable.model');

const indexReceivablePayment = async (req, res) => {
  try {
    const { size = 10, current = 1 } = req.query;
    const skip = (current - 1) * size;

    const [total, receivablePayments] = await Promise.all([ReceivablePayment.countDocuments(), ReceivablePayment.find({}).skip(skip).limit(parseInt(size))]);

    const totalPages = Math.ceil(total / size);

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: receivablePayments,
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

const showReceivablePayment = async (req, res) => {
  try {
    const { id } = req.params;

    const receivablePayment = await ReceivablePayment.findById(id).lean();

    if (!receivablePayment) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: receivablePayment,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const storeReceivablePayment = async (req, res) => {
  let status;
  try {
    const receivablePaymentData = req.body;
    const id_receivable = new ObjectId(receivablePaymentData.id_receivable);
    const id_customer = new ObjectId(receivablePaymentData.id_customer);
    const id_profile = new ObjectId(receivablePaymentData.id_profile);

    const receivable = await Receivable.findById(id_receivable, { remaining_payment: 1, total_receivable: 1, total_payment: 1, status: 1 });

    if (!receivable) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Receivable not found',
      });
    }

    const remaining_payment = receivable.remaining_payment - receivablePaymentData.pay_amount;

    if (remaining_payment < 0) {
      return res.status(400).json({
        code: 400,
        status: 'Bad Request',
        message: 'Your payment amount exceeds the remaining payment',
      });
    } else if (remaining_payment === 0) {
      status = 'Lunas';
    } else if (remaining_payment > 0) {
      status = 'Belum Lunas';
    }

    const receivablePayment = await ReceivablePayment.create({
      _id_receivable: id_receivable,
      _id_customer: id_customer,
      customer_name: receivablePaymentData.customer_name,
      _id_profile: id_profile,
      name: receivablePaymentData.name,
      remaining_payment: remaining_payment,
      payment_date: receivablePaymentData.payment_date,
      pay_type: receivablePaymentData.pay_type,
      pay_amount: receivablePaymentData.pay_amount,
      information: receivablePaymentData.information,
    });

    const updateReceivable = await Receivable.findByIdAndUpdate(id_receivable, { $inc: { total_payment: receivablePaymentData.pay_amount }, remaining_payment: remaining_payment, status: status }, { new: true });

    res.status(201).json({
      code: 201,
      status: 'Created',
      message: receivablePayment,
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

const updateReceivablePayment = async (req, res) => {
  let updateReceivable;
  let status;
  try {
    const { id } = req.params;
    const receivablePaymentData = req.body;
    const id_sale = new ObjectId(receivablePaymentData.id_sale);
    const id_customer = new ObjectId(receivablePaymentData.id_customer);

    const receivablePayment = await ReceivablePayment.findById(id).lean();

    if (!receivablePayment) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    const id_receivable = new ObjectId(receivablePayment._id_receivable);
    const totalPaymentDifference = Math.abs(receivablePayment.pay_amount - receivablePaymentData.pay_amount);

    if (receivablePayment.pay_amount > receivablePaymentData.pay_amount) {
      receivablePaymentData.remaining_payment = receivablePayment.remaining_payment + totalPaymentDifference;

      if (receivablePaymentData.remaining_payment === 0) {
        status = 'Lunas';
      } else {
        status = 'Belum Lunas';
      }

      updateReceivable = await Receivable.findByIdAndUpdate(
        id_receivable,
        {
          $inc: { total_payment: -totalPaymentDifference },
          remaining_payment: receivablePaymentData.remaining_payment,
          status: status,
        },
        { new: true }
      );
    } else {
      receivablePaymentData.remaining_payment = receivablePayment.remaining_payment - totalPaymentDifference;

      if (receivablePaymentData.remaining_payment < 0) {
        return res.status(400).json({
          code: 400,
          status: 'Bad Request',
          message: 'Your payment amount exceeds the remaining payment',
        });
      } else if (receivablePaymentData.remaining_payment === 0) {
        status = 'Lunas';
      } else {
        status = 'Belum Lunas';
      }

      updateReceivable = await Receivable.findByIdAndUpdate(
        id_receivable,
        {
          $inc: { total_payment: totalPaymentDifference },
          remaining_payment: receivablePaymentData.remaining_payment,
          status: status,
        },
        { new: true }
      );
    }

    receivablePaymentData._id_sale = id_sale;
    receivablePaymentData._id_customer = id_customer;

    const updatedReceivablePayment = await ReceivablePayment.findByIdAndUpdate({ _id: id }, { $set: receivablePaymentData }, { new: true });

    res.status(201).json({
      code: 201,
      status: 'Created',
      message: updatedReceivablePayment,
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

const deleteReceivablePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const receivablePayment = await ReceivablePayment.findByIdAndDelete(id);

    if (!receivablePayment) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

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

module.exports = { indexReceivablePayment, showReceivablePayment, storeReceivablePayment, updateReceivablePayment, deleteReceivablePayment };
