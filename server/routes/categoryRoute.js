const { isValidObjectId } = require('mongoose');
const { addCatCtrl, getAllCats, getCatById } = require('../controller/categoryCtrl');
const handleDoc = require('../middleware/seeking');
const validId = require('../middleware/validId');

const router = require('express').Router();

router.route('/')
    .get(handleDoc, getAllCats)
        .post(addCatCtrl)
router.route('/:id')
    .get(validId, getCatById )



module.exports = router