const jwt = require('jsonwebtoken');
const AppError = require('../Utility/AppError');


function Valid_token(req, res, next) {
    // Get token from header
    const { authorization } = req.headers
    if ( !authorization ) {
        return res.status(401).json('no token provider')
    }
    const [ Bearer, token ] = req.headers.authorization.split(" ");
    // verity token
    try {
        const user = jwt.verify(token, process.env.SECRET_KEY);
        // set decoded token in req
        req.user = user;
        next();
    } catch (err) {
        return next(new AppError(403, "Invalid Token , access denied' "));
    }
}


function Valid_token_admin(req, res, next) {
    Valid_token(req, res, () => {
        if (!req.user.isAdmin) return res.status(401).json('available to admin only')
        else next()
    })
}

module.exports = {
    Valid_token,
    Valid_token_admin
}
