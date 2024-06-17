const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config({ path: './config.env' });

// initialize middleware
const cors = require('./middleware/cors.middleware');
const json = require('./middleware/json.middleware');
const urlEncoded = require('./middleware/urlEncoded.middleware');
const session = require('./middleware/session.middleware');
const authorization = require('./middleware/authorization.middleware');
const role = require('./middleware/checkRole.middleware');

// initialize route
const authRoute = require('./routes/auth.route');
const accountRoute = require('./routes/account.route');
const profileRoute = require('./routes/profile.route');
const productRoute = require('./routes/product.route');
const supplierRoute = require('./routes/supplier.route');
const purchaseRoute = require('./routes/purchase.route');
const purchaseReturnRoute = require('./routes/purchaseReturn.route');
const customerRoute = require('./routes/customer.route.');
const saleRoute = require('./routes/sale.route');
const saleDetailRoute = require('./routes/saleDetail.route');
const paymentRoute = require('./routes/payment.route');
const receivableRoute = require('./routes/receivable.route');
const receivablePaymentRoute = require('./routes/receivablePayment.route');
const imageRoute = require('./routes/image.route');

// middlewares
app.use(cors);
app.use(json);
app.use(urlEncoded);
app.use(session);

// routes
app.use('/auths', authRoute);
app.use('/accounts', accountRoute);
app.use('/profiles', profileRoute);
app.use('/products', productRoute);
app.use('/suppliers', supplierRoute);
app.use('/purchases', purchaseRoute);
app.use('/purchase_returns', purchaseReturnRoute);
app.use('/customers', customerRoute);
app.use('/sales', saleRoute);
app.use('/sale_details', saleDetailRoute);
app.use('/payments', paymentRoute);
app.use('/receivables', receivableRoute);
app.use('/receivable_payments', receivablePaymentRoute);

app.use('/uploads', imageRoute);

module.exports = app;
