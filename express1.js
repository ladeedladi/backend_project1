const express=require('express')
const path=require('path')
const app=express()
const adminRoutes=require('./routes1/admin1')
const shopRoutes=require('./routes1/shop1')
const error=require('./controllers/error')
const formRoutes=require('./routes1/form1')
app.use(express.static(path.join(__dirname,'public')));
//              enctype
app.use(express.urlencoded({extended:false}))
app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)
app.use(formRoutes)
app.use(error.get404)

app.listen(3000);