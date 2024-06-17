const { ObjectId } = require('mongodb');
const Purchase = require('../models/purchase.model');
const Product = require('../models/product.model');

const indexPurchase = async (req, res) => {
  try {
    const { size = 10, current = 1 } = req.query;
    const skip = (current - 1) * size;

    const [total, purchases] = await Promise.all([Purchase.countDocuments(), Purchase.find({}).skip(skip).limit(parseInt(size))]);

    const totalPages = Math.ceil(total / size);

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: purchases,
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

const showPurchase = async (req, res) => {
  try {
    const { id } = req.params;

    const purchase = await Purchase.findById(id).lean();

    if (!purchase) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: purchase,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const storePurchase = async (req, res) => {
  let sub_total = 0;
  let id_products = [];
  let updateProducts = [];
  try {
    const purchaseData = req.body;
    const id_supplier = new ObjectId(purchaseData.id_supplier);
    const id_profile = new ObjectId(purchaseData.id_profile);

    await Promise.all(
      purchaseData.products.map(async (productData) => {
        const id_product = new ObjectId(productData.id_product);
        id_products.push(id_product);

        const product = await Product.findById(id_product).lean();

        if (!product) {
          updateProducts.push({
            _id: id_product,
            product_name: productData.product_name,
            category: productData.category,
            quantity: productData.quantity,
            unit: productData.unit,
            price: productData.price,
            purchase_price: productData.purchase_price,
            image: productData.image,
          });
        } else {
          product.quantity += productData.quantity;
          await product.save();

          updateProducts.push(product);
        }

        sub_total += productData.purchase_price * productData.quantity;

        return Promise.resolve();
      })
    );

    if (updateProducts.length > 0) {
      await Product.bulkWrite(
        updateProducts.map((product) => ({
          updateOne: {
            filter: { _id: product._id },
            update: { $set: product },
            upsert: true,
          },
        }))
      );
    }

    const purchase = await Purchase.create({
      _id_supplier: id_supplier,
      supplier_name: purchaseData.supplier_name,
      _id_profile: id_profile,
      name: purchaseData.name,
      purchase_date: purchaseData.purchase_date,
      received_date: purchaseData.received_date,
      products: updateProducts,
      sub_total: sub_total,
      pay_type: purchaseData.pay_type,
      information: purchaseData.information,
    });

    res.status(201).json({
      code: 201,
      status: 'Created',
      message: purchase,
    });
  } catch (error) {
    if (id_products.length > 0 || error.name === 'ValidationError') {
      await Product.deleteMany({ _id: { $in: id_products } });

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

const updatePurchase = async (req, res) => {
  let sub_total = 0;
  let productChanges = [];
  try {
    const { id } = req.params;
    const purchaseData = req.body;

    const purchase = await Purchase.findById(id).lean();

    if (!purchase) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    await Promise.all(
      purchase.products.map(async (initialProduct, i) => {
        const productData = purchaseData.products[i];
        const id_product = new ObjectId(productData.id_product);

        const product = await Product.findById(id_product).lean();

        if (!product) {
          return res.status(404).json({
            code: 404,
            status: 'Not Found',
            message: 'Product not found',
          });
        }

        let quantityDifference = Math.abs(productData.quantity - initialProduct.quantity);

        if (productData.quantity > initialProduct.quantity) {
          product.quantity += quantityDifference;
        } else {
          product.quantity -= quantityDifference;
        }

        productChanges.push(product);

        sub_total += productData.purchase_price * productData.quantity;
      })
    );

    purchaseData.sub_total = sub_total;

    const updatedPurchase = await Purchase.findByIdAndUpdate({ _id: id }, { $set: purchaseData }, { new: true });

    await Promise.all(
      productChanges.map(async (product) => {
        await Product.findOneAndUpdate({ _id: product._id }, { $set: { quantity: product.quantity } }, { new: true });
      })
    );

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: updatedPurchase,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const deletePurchase = async (req, res) => {
  try {
    const { id } = req.params;

    const purchase = await Purchase.findByIdAndDelete(id);

    if (!purchase) {
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

module.exports = { indexPurchase, showPurchase, storePurchase, updatePurchase, deletePurchase };
