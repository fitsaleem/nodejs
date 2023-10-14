// creating server with the help of express
const express= require("express");
const server=express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')





// body parser
server.use(express.json()); //it will read body
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);





server.listen(3000 , ()=>{
    console.log("server started")
})

