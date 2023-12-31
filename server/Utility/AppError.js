const handelStatusCode = (statusCode) => {
    switch (statusCode) {
        case 200:
            return { msg: 'OK', request: 'success' };

        case 201:
            return { msg: 'Created', request: 'success' };

        case 400:
            return { msg: 'Bad Request', request: 'failed' };

        case 401:
            return { msg: 'Unauthorized', request: 'failed' };

        case 404:
            return { msg: 'Not Found', request: 'failed' };

        case 500:
            return { msg: 'Internal Server Error', request: 'failed' };

        default:
            return { msg: 'Internal Server Error', request: 'failed' };

    }
};



class AppError extends Error {

    constructor (statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.request = handelStatusCode(this.statusCode).request;
        this.operational = true;
    }
}

module.exports = AppError;