const { getAllProductsCtrl, addProductCtrl, getProductByIdCtrl } = require('../controller/productCtrl');
const uploadFields = require('../middleware/upload');
const isFoundId = require('../middleware/isFoundId');
const { Valid_token_admin } = require('../middleware/AuthMiddleware');
const { set_imgs_in_request } = require('../Utility/setImgsInRequest');
const handleDoc = require('../middleware/seeking');

const router = require('express').Router();

router.route('/')
    .get(handleDoc,getAllProductsCtrl)
    .post(Valid_token_admin, uploadFields, set_imgs_in_request, isFoundId, addProductCtrl);


router.route('/:id')
    .get(getProductByIdCtrl);



module.exports = router;