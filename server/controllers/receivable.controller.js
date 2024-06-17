const { ObjectId } = require('mongodb');
const Receivable = require('../models/receivable.model');

const indexReceivable = async (req, res) => {
  try {
    const { size = 10, current = 1 } = req.query;
    const skip = (current - 1) * size;

    const [total, receivables] = await Promise.all([Receivable.countDocuments(), Receivable.find({}).skip(skip).limit(parseInt(size))]);

    const totalPages = Math.ceil(total / size);

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: receivables,
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

const showReceivable = async (req, res) => {
  try {
    const { id } = req.params;

    const receivable = await Receivable.findById(id).lean();

    if (!receivable) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: receivable,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const storeReceivable = async (req, res) => {
  let total_payment;
  let remaining_payment;
  let status;
  try {
    const receivableData = req.body;
    const id_sale = new ObjectId(receivableData.id_sale);
    const id_customer = new ObjectId(receivableData.id_customer);
    const id_profile = new ObjectId(receivableData.id_profile);

    if (receivableData.total_payment !== undefined) {
      total_payment = receivableData.total_payment;
    } else {
      total_payment = 0;
    }

    remaining_payment = receivableData.total_receivable - total_payment;

    if (remaining_payment === 0) {
      status = 'Lunas';
    } else {
      status = 'Belum Lunas';
    }

    const receivable = await Receivable.create({
      _id_sale: id_sale,
      _id_customer: id_customer,
      customer_name: receivableData.customer_name,
      _id_profile: id_profile,
      name: receivableData.name,
      receivable_date: receivableData.receivable_date,
      total_receivable: receivableData.total_receivable,
      total_payment: total_payment,
      remaining_payment: remaining_payment,
      due_date: receivableData.due_date,
      status: status,
      information: receivableData.information,
    });

    res.status(201).json({
      code: 201,
      status: 'Created',
      data: receivable,
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

const updateReceivable = async (req, res) => {
  let total_payment;
  let remaining_payment;
  let status;
  try {
    const { id } = req.params;
    const receivableData = req.body;

    const receivable = await Receivable.findById(id).lean();

    if (!receivable) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    if (receivableData.total_payment !== undefined) {
      total_payment = receivableData.total_payment;
    } else {
      total_payment = 0;
    }

    if (total_payment > receivable.total_receivable) {
      return res.status(400).json({
        code: 400,
        status: 'Bad Request',
        message: 'Total payment must not exceed total receivable',
      });
    }

    remaining_payment = receivableData.total_receivable - total_payment;

    if (remaining_payment === 0) {
      receivableData.status = 'Lunas';
    }
    receivableData.remaining_payment = remaining_payment;

    const updatedReceivable = await Receivable.findByIdAndUpdate(id, { $set: receivableData }, { new: true });

    if (!updatedReceivable) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    res.status(201).json({
      code: 201,
      status: 'Created',
      data: updatedReceivable,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const deleteReceivable = async (req, res) => {
  try {
    const { id } = req.params;

    const receivable = await Receivable.findByIdAndDelete(id);

    if (!receivable) {
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

module.exports = { indexReceivable, showReceivable, storeReceivable, updateReceivable, deleteReceivable };
