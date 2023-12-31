const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');




//   method : Get
//   privet : false
//   route  : api/Product
exports.getAllProductsCtrl = asyncHandler(async (req, res, next) => {
    const { seeking, sortBy } = req;
    let products = await Product.find(seeking).sort(sortBy).populate('category', 'name');
    return res.status(200).json({ data: products });
});



//   method : Get
//   privet : false
//   route  : api/Product/:id
exports.getProductByIdCtrl = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    let product = await Product.findById(id);
    return res.status(200).json({ data: product });
});



//   method : Post
//   privet : false
//   route  : api/Product
exports.addProductCtrl = asyncHandler(async (req, res, next) => {
    let product = await Product.create(req.body);
    return res.status(201).json({ data: product });
});