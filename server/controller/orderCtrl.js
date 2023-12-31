const Order = require('../models/orderModel');
const User = require('../models/userModel.js');
const Product = require('../models/productModel.js');
const asyncHandler = require('express-async-handler');
const AppError = require('../Utility/AppError.js');



exports.orderById = asyncHandler(async (req, res, next) => {
    const order = await Order.findById(req.params.orderId)
        .populate('products.product');
    if (!order) next(new AppError(404, 'orders not found'));
    res.status(201).json({ success: true, data: order });

});

exports.getAllOrdersCtrl = asyncHandler(async (req, res, next) => {
    const orders = await Order.find({ user: req.user.id })
        .populate('products.product');
    if (!orders) next(new AppError(404, 'orders not found'));
    res.status(201).json({ success: true, data: orders });

});



exports.addOrderCtrl = asyncHandler(async (req, res, next) => {
    const { products, address } = req.body;
    console.log(req.body);
    if (!products) return next(new AppError(401, "no products found"));

    // total price
    let totalPrice = 0;
    for await (let product of products) {
        const proData = await Product.findById(product.product);
        if (!proData) return next(new AppError(404, "Product not Found"));
        totalPrice += proData.price * product.qty;
    };





    // create order
    const newOrder = await Order.create({
        user: req.user.id,
        products,
        totalPrice: totalPrice,
        address: { ...address }
    });
    return res.status(201).json({ status: 'success', newOrder });

});


