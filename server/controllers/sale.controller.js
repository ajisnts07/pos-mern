const { ObjectId } = require('mongodb');
const Sale = require('../models/sale.model');
const SaleDetail = require('../models/saleDetail.model');
const Payment = require('../models/payment.model');
const Product = require('../models/product.model');

const indexSale = async (req, res) => {
  try {
    const { size = 10, current = 1 } = req.query;
    const skip = (current - 1) * size;

    const [total, sales] = await Promise.all([Sale.countDocuments(), Sale.find({}).skip(skip).limit(parseInt(size))]);

    const totalPages = Math.ceil(total / size);

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: sales,
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

const showSale = async (req, res) => {
  try {
    const { id } = req.params;

    const sale = await Sale.findById(id).lean();

    if (!sale) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: sale,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const storeSale = async (req, res) => {
  let productDatas = [];
  let id_products = [];
  let updateProducts = [];
  let expedition_cost;
  let sub_total = 0;
  let discount = 0;
  let total_paid;
  let change;
  let sale;
  let saleDetail;
  let payment;
  try {
    const saleData = req.body;
    const id_customer = new ObjectId(saleData.id_customer);
    const id_profile = new ObjectId(saleData.id_profile);

    await Promise.all(
      saleData.products.map(async (productData) => {
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
            quantity: productData.quantity,
            unit: productData.unit,
            price: productData.price,
          });
        } else {
          return res.status(400).json({
            code: 400,
            status: 'Bad Request',
            message: 'Quantity must be a positive number',
          });
        }

        sub_total += productData.price * productData.quantity;

        return Promise.resolve();
      })
    );

    if (saleData.expedition_type !== 'Dikirim') {
      saleData.expedition_cost = 0;
    }

    expedition_cost = saleData.expedition_cost;
    sub_total = sub_total + expedition_cost;
    discount = saleData.discount;
    total_paid = sub_total - sub_total * (discount / 100);
    change = saleData.pay_amount - total_paid;

    sale = await Sale.create({
      _id_customer: id_customer,
      customer_name: saleData.customer_name,
      _id_profile: id_profile,
      name: saleData.name,
      sale_date: saleData.sale_date,
      expedition_type: saleData.expedition_type,
      products: updateProducts,
      sub_total: sub_total,
      discount: discount,
      total_paid: total_paid,
      pay_type: saleData.pay_type,
      pay_amount: saleData.pay_amount,
      change: change,
      information: saleData.information,
    });

    saleDetail = await SaleDetail.create({
      _id_sale: sale._id,
      products: updateProducts,
    });

    payment = await Payment.create({
      _id_sale: sale._id,
      sale_date: saleData.sale_date,
      total_paid: total_paid,
      pay_type: saleData.pay_type,
      pay_amount: saleData.pay_amount,
      change: change,
    });

    res.status(201).json({
      code: 201,
      status: 'Created',
      message: sale,
    });
  } catch (error) {
    if (saleDetail) {
      await SaleDetail.findOneAndDelete({ _id_sale: sale._id });
    }

    if (payment) {
      await Payment.findOneAndDelete({ _id_sale: sale._id });
    }

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

const updateSale = async (req, res) => {
  let updateProducts = [];
  let changeProducts = [];
  let expedition_cost;
  let sub_total = 0;
  let discount = 0;
  let total_paid;
  let change;
  try {
    const { id } = req.params;
    const saleData = req.body;

    const sale = await Sale.findById(id).lean();

    if (!sale) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: 'Resource not found',
      });
    }

    await Promise.all(
      sale.products.map(async (initialProduct, i) => {
        const productData = saleData.products[i];
        const id_product = new ObjectId(productData.id_product);

        const product = await Product.findById(id_product).lean();

        let quantityDifference = Math.abs(productData.quantity - initialProduct.quantity);

        if (productData.quantity > initialProduct.quantity) {
          product.quantity -= quantityDifference;
        } else {
          product.quantity += quantityDifference;
        }

        updateProducts.push(product);
        changeProducts.push(productData);

        sub_total += productData.price * productData.quantity;
      })
    );

    expedition_cost = saleData.expedition_cost;
    sub_total = sub_total + expedition_cost;
    discount = saleData.discount;
    total_paid = sub_total - sub_total * (discount / 100);
    change = saleData.pay_amount - total_paid;

    saleData.total_paid = total_paid;
    saleData.change = change;

    const updatedSale = await Sale.findByIdAndUpdate({ _id: id }, { $set: saleData }, { new: true });

    await Promise.all(
      updateProducts.map(async (product) => {
        await Product.findOneAndUpdate({ _id: product._id }, { $set: { quantity: product.quantity } }, { new: true });
      })
    );

    const updatedSaleDetail = await SaleDetail.findOneAndUpdate({ _id_sale: id }, { $set: { products: changeProducts } }, { new: true });

    const updatedPayment = await Payment.findOneAndUpdate(
      { _id_sale: id },
      { $set: { sale_date: saleData.sale_date, total_paid: total_paid, pay_type: saleData.pay_type, pay_amount: saleData.pay_amount, change: saleData.change } },
      { new: true }
    );

    res.status(200).json({
      code: 200,
      status: 'Ok',
      data: updatedSale,
    });
  } catch (error) {
    await Promise.all(
      productChanges.map(async (product) => {
        const initialProduct = await Product.findById(product._id).lean();

        const quantityDifference = Math.abs(product.quantity - initialProduct.quantity);

        if (product.quantity > initialProduct.quantity) {
          product.quantity -= quantityDifference;
        } else {
          product.quantity += quantityDifference;
        }

        await Product.findByIdAndUpdate(product._id, { $set: { quantity: product.quantity } }, { new: true });
      })
    );

    res.status(500).json({
      code: 500,
      status: 'Internal Server Error',
      message: error.message,
    });
  }
};

const deleteSale = async (req, res) => {
  try {
    const { id } = req.params;

    const [sale, saleDetail, payment] = await Promise.all([Sale.findByIdAndDelete(id), SaleDetail.findOneAndDelete({ _id_sale: id }), Payment.findOneAndDelete({ _id_sale: id })]);

    if (!sale) {
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

module.exports = { indexSale, showSale, storeSale, updateSale, deleteSale };
