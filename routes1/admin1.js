
const express=require('express')
const productController=require('../controllers/products')

const router=express.Router()

router.get('/add-product',productController.getAddproducts)
    
router.post('/add-product',productController.postAddproducts)
    module.exports=router