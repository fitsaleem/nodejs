// creating server with the help of express
require('dotenv').config()
const express= require("express");
const server=express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const mongoose = require('mongoose');




//db connection


async function main() {
  await mongoose.connect(process.env.MONGO_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch(err => console.error('Connection error', err));
}

main();

// body parser
server.use(express.json()); //it will read body
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);





server.listen(3000 , ()=>{
    console.log("server started")
})

