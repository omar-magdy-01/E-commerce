const router = require('express').Router();

const {getAllUserCtrl, register, login }  = require('../controller/userCtrl');
const { Valid_token_admin } = require('../middleware/AuthMiddleware');

router.get('/', Valid_token_admin,  getAllUserCtrl)


router.post('/register', register)


router.post('/login' , login)



module.exports = router