const express = require('express');
const router = express.Router();

const Products = require('./product/index');
const auth = require('./auth/index');
const user = require('./user/index');
const admin = require('./admin/index');
const SellingProducts=require('./SellingProducts/index')
const {isLoggined,isAdmin} = require('./../middleware/auth');



router.use('/product' , Products);
router.use('/auth',auth);
router.use('/user', isLoggined ,user);
router.use('/admin', isLoggined ,isAdmin ,admin);
router.use('/SellingProducts',isLoggined,SellingProducts);
module.exports = router;