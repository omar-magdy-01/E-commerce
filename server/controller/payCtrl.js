const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');
const AppError = require('../Utility/AppError');
const paypal = require('@paypal/checkout-server-sdk');
// Set up PayPal client
const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);



const payCtrl = asyncHandler(async (req, res, next) => {

    const { orderId } = req.body;
    const order = await Order.findById(orderId)
    if (!order) next(new AppError(401, 'order is not found'))
    
    const amount = order.totalPrice
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [ {
            amount: {
                currency_code: 'USD',
                value: amount
            }
        } ]
    });
    const transaction = await client.execute(request);
    console.log(transaction)

    

});
module.exports = {
    payCtrl
};