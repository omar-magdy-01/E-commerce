const globalError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'failed';
    if (process.env.NODE_ENV === 'development') {
        errForDevMode(err, res);
    } else {
        errForProdMode(err, res);
    }

};

const errForDevMode = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status,
        statusCode: err.statusCode,
        message: err.message,
        error: err,
        stack: err.stack.split(" at ")[ 1 ]
    });
};
const errForProdMode = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status,
        statusCode: err.statusCode,
        message: err.message,
    });
};

module.exports = globalError;