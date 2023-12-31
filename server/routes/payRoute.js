const router = require('express').Router();
const { payCtrl } = require('../controller/payCtrl');
const { Valid_token } = require('../middleware/AuthMiddleware');



router.route('/')
    .post(Valid_token, payCtrl);



module.exports = router;