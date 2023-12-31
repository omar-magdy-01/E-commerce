const router = require('express').Router();
const { getAllOrdersCtrl, addOrderCtrl, orderById } = require('../controller/orderCtrl');
const { Valid_token } = require('../middleware/AuthMiddleware');



router.route('/')
    .get(Valid_token, getAllOrdersCtrl)
    .post(Valid_token, addOrderCtrl);

router.route('/:orderId')
    .get(Valid_token, orderById)



module.exports = router;