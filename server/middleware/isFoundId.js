const Category = require('../models/categoryModel');
const AppError = require('../Utility/AppError');


const isFoundId = async (req, res, next) => {

    let error;

    if (req.body.category) {
        const category = await Category.findById(req.body.category);
        if (!category) error = 'this Category is not exist';
    }

    if (error) {
        return next(new AppError(401, error));
    }

    return next();
};
module.exports = isFoundId;