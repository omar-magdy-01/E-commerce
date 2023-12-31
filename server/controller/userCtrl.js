const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')
const AppError = require('../Utility/AppError');
const { nodeMailer } = require('../Utility/nodeMailer');


// method : Get
// route  : /api/user
// desc   : Fetch all users
// privet : true
exports.getAllUserCtrl = asyncHandler(async (req, res, next) => {
    const users = await User.find({})
    res.status(201).json({success: true, data: users});
});



// method : Post
// route  : /api/user/register
// desc   : create account
// privet : false
exports.register = asyncHandler(async (req, res, next) => {

    let user = await User.findOne({ email: req.body.email })
    if (user) return next(new AppError(401, 'this user is already exist'))

    // create user 
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city,
        phone: req.body.phone
    })
    nodeMailer(req.body.email, "MEGA STORE", `thank you ${req.body.name} for register in our online store`)
    // generate token
    const token = user.generateJWT()

    res.status(201).json({ status: 'success', user , token});
});


// method : Post
// route  : /api/user/login
// desc   : login to an account
// privet : false
exports.login = asyncHandler(async (req, res, next) => {

    // check if user is already exist
    let user = await User.findOne({ email: req.body.email });
    if (!user) return next(new AppError(401, "Email or Password is incorrect"))


    // compare between password on db and password on request body
    const isValidPassword = await user.isPasswordValid(req.body.password, user.password)
    if (!isValidPassword) return next(new AppError(401, "Email or Password is incorrect"));
    
    // generate token
    const token = user.generateJWT();
    
    // return response with token
    res.status(200).json({status:'success',  user, token })
    
});