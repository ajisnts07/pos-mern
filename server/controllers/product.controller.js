const multer = require('multer');
const Product = require('../models/product.model');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/product/');
  },
  filename: function (req, file, cb) {
    const originalname = file.originalname;
    const filename = originalname.toLocaleLowerCase().replace(/\s+/g, '');

    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

const indexProduct = async (req, res) => {
  try {
    const { size = 10, current = 1 } = req.query;
    const skip = (current - 1) * size;

    const [total, products] = await Promise.all([Product.countDocuments(), Product.find({}).skip(skip).limit(parseInt(size))]);

    const totalPages = Math.ceil(total / size);

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: products,
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

const showProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id).lean();

    if (!product) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const storeProduct = async (req, res) => {
  try {
    upload.single('image')(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      const productData = {
        product_name: req.body.product_name,
        category: req.body.category,
        quantity: req.body.quantity,
        unit: req.body.unit,
        price: req.body.price,
        purchase_price: req.body.purchase_price,
      };

      if (req.file) {
        productData.image = req.file.filename;
      }

      const product = await Product.create([productData]);

      res.status(201).json({
        code: 201,
        status: 'Created',
        data: product,
      });
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

const updateProduct = async (req, res) => {
  let updatedProduct;

  try {
    upload.single('image')(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      const { id } = req.params;

      const productData = {
        product_name: req.body.product_name,
        category: req.body.category,
        quantity: req.body.quantity,
        unit: req.body.unit,
        price: req.body.price,
        purchase_price: req.body.purchase_price,
      };

      if (req.file) {
        productData.image = req.file.filename;
      }

      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).json({
          code: 404,
          status: 'Not Found',
          message: 'Resource not found',
        });
      }

      if (product.image && productData.image) {
        const imagePath = path.join(__dirname, '..', 'uploads', 'product', product.image);

        fs.unlink(imagePath, async (err) => {
          updatedProduct = await Product.findByIdAndUpdate({ _id: id }, { $set: productData }, { new: true });
        });
      }

      updatedProduct = await Product.findByIdAndUpdate({ _id: id }, { $set: productData }, { new: true });

      res.status(201).json({
        code: 201,
        status: 'Updated',
        data: updatedProduct,
      });
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

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    if (product.image) {
      const imagePath = path.join(__dirname, '..', 'uploads', 'product', product.image);

      fs.unlink(imagePath, async (err) => {
        await Product.findByIdAndDelete(id);
      });
    }

    await Product.findByIdAndDelete(id);

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

module.exports = { indexProduct, showProduct, storeProduct, updateProduct, deleteProduct };
