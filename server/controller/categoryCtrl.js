const Category = require('../models/categoryModel');
const asyncHandler = require('express-async-handler');



//   method : Get
//   privet : false
//   route  : api/category
exports.getAllCats = asyncHandler(async (req, res, next) => {
    const {seeking, sortBy} = req
    let cats = await Category.find(seeking).sort(sortBy)
    return res.status(200).json({ data: cats });
});



//   method : Get
//   privet : false
//   route  : api/category/:id
exports.getCatById = asyncHandler(async (req, res, next) => {
    const {id} = req.params
    let cat = await Category.findById(id)
    return res.status(200).json({ data: cat });
});



//   method : Post
//   privet : false
//   route  : api/category
exports.addCatCtrl = asyncHandler(async (req, res, next) => {
    let cat = await Category.create({ name: req.body.name });
    return res.status(201).json({ data: cat });
});