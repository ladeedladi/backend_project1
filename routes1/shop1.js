const path=require('path')
const express=require('express')
const router=express.Router();
const productController=require('../controllers/products')

router.get('/',productController.custProduct)
module.exports=router;