const { isValidObjectId } = require('mongoose');


const validId = (req, res, next) => {
    if (!isValidObjectId(req.params.id)) {
        return res.status(400).send({ error: 'Invalid ID' });
    }

    return next();
};


module.exports = validId;