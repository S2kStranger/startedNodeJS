const express=require('express');


const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next) => {
    res.send('<form action = "/product" method="POST"> <label>Product:</label><input type="text" name="title"><label> Size :</label><input type="text" name="size"><button type="submit">Send</button></form>' );

});

app.use('/product', (req,res,next) => {
    console.log(req.body);
    return res.redirect('/');
});

app.use('/', (req,res,next) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);