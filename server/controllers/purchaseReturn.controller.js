const { ObjectId } = require('mongodb');
const PurchaseReturn = require('../models/purchaseReturn.model');
const Product = require('../models/product.model');

const indexPurchaseReturn = async (req, res) => {
  try {
    const { size = 10, current = 1 } = req.body;
    const skip = (current - 1) * size;

    const [total, purchaseReturns] = await Promise.all([PurchaseReturn.countDocuments(), PurchaseReturn.find({}).skip(skip).limit(parseInt(size))]);

    const totalPages = Math.ceil(total / size);

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: purchaseReturns,
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

const showPurchaseReturn = async (req, res) => {
  try {
    const { id } = req.params;

    const purchaseReturn = await PurchaseReturn.findById(id).lean();

    if (!purchaseReturn) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: purchaseReturn,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const storePurchaseReturn = async (req, res) => {
  let productDatas = [];
  let id_products = [];
  let updateProducts = [];
  let sub_total = 0;
  try {
    const purchaseReturnData = req.body;
    const id_purchase = new ObjectId(purchaseReturnData.id_purchase);
    const id_supplier = new ObjectId(purchaseReturnData.id_supplier);
    const id_profile = new ObjectId(purchaseReturnData.id_profile);

    await Promise.all(
      purchaseReturnData.products.map(async (productData) => {
        const id_product = new ObjectId(productData.id_product);

        productDatas.push(productData);
        id_products.push(id_product);

        const product = await Product.findById(id_product).lean();

        if (!product) {
          return res.status(404).json({
            code: 404,
            status: 'Not Found',
            message: 'Resource not found',
          });
        }

        if (product.quantity > 0) {
          await Product.findByIdAndUpdate(id_product, { $inc: { quantity: -productData.quantity } }, { new: true });

          updateProducts.push({
            _id: id_product,
            product_name: productData.product_name,
            category: productData.category,
            quantity: productData.quantity,
            unit: productData.unit,
            purchase_price: productData.purchase_price,
          });
        } else {
          return res.status(400).json({
            code: 400,
            status: 'Bad Request',
            message: 'Quantity must be a positive number',
          });
        }

        sub_total += productData.purchase_price * productData.quantity;

        return Promise.resolve();
      })
    );

    const purchaseReturn = await PurchaseReturn.create({
      _id_purchase: id_purchase,
      return_date: purchaseReturnData.return_date,
      _id_supplier: id_supplier,
      supplier_name: purchaseReturnData.supplier_name,
      _id_profile: id_profile,
      name: purchaseReturnData.name,
      products: updateProducts,
      sub_total: sub_total,
      pay_type: purchaseReturnData.pay_type,
      information: purchaseReturnData.information,
    });

    res.status(201).json({
      code: 201,
      status: 'Created',
      message: purchaseReturn,
    });
  } catch (error) {
    if ((id_products > 0) | (error.name === 'ValidationError')) {
      const updates = productDatas.map(({ id_product, quantity }) => ({
        updateOne: {
          filter: { _id: id_product },
          update: { $inc: { quantity: quantity } },
        },
      }));

      await Product.bulkWrite(updates);

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

const updatePurchaseReturn = async (req, res) => {
  let sub_total = 0;
  let productChanges = [];
  try {
    const { id } = req.params;
    const purchaseReturnData = req.body;

    const purchaseReturn = await PurchaseReturn.findById(id).lean();

    if (!purchaseReturn) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    await Promise.all(
      purchaseReturn.products.map(async (initialProduct, i) => {
        const productData = purchaseReturnData.products[i];
        const id_product = new ObjectId(productData.id_product);

        const product = await Product.findById(id_product).lean();

        let quantityDifference = Math.abs(productData.quantity - initialProduct.quantity);

        if (productData.quantity > initialProduct.quantity) {
          product.quantity -= quantityDifference;
        } else {
          product.quantity += quantityDifference;
        }

        productChanges.push(product);

        sub_total += productData.purchase_price * productData.quantity;
      })
    );

    purchaseReturnData.sub_total = sub_total;

    const updatedPurchaseReturn = await PurchaseReturn.findByIdAndUpdate({ _id: id }, { $set: purchaseReturnData }, { new: true });

    await Promise.all(
      productChanges.map(async (product) => {
        await Product.findOneAndUpdate({ _id: product._id }, { $set: { quantity: product.quantity } }, { new: true });
      })
    );

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: updatedPurchaseReturn,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const deletePurchaseReturn = async (req, res) => {
  try {
    const { id } = req.params;

    const purchaseReturn = await PurchaseReturn.findByIdAndDelete(id);

    if (!purchaseReturn) {
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

module.exports = { indexPurchaseReturn, showPurchaseReturn, storePurchaseReturn, updatePurchaseReturn, deletePurchaseReturn };
