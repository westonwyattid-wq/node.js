const express = require('express')
const app = express()
app.use(express.static("./public"));
app.get('/',function(req,res){
    res.render('index.ejs')
})
app.get('/Contact',function(req,res){
    res.render('Contact.ejs')
})
app.get('/Buy',function(req,res){
    res.render('buy.ejs')
})
app.get('/Download',function(req,res){
    res.render('download.ejs')
})
app.get('/Product',function(req,res){
    res.render('Product.ejs')
})
app.listen(3000,function(){console.log('Busy App is listening at port 3000')})