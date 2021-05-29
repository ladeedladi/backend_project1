const express=require('express')
const path=require('path')
const router=express.Router();
const about=require('../controllers/about')

router.get('/contactUs',about.getContact)
    router.post('/success',about.getsuccess)
module.exports=router;