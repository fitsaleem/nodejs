const fs=require("fs");
const index=fs.readFileSync('index.html' ,'utf-8');
const data =(fs.readFileSync("data.js" , "utf-8"))
const product= data.products

// creating server with the help of express
const express= require("express");
const server=express();



server.get("/", (req,res)=>{
    // res.send("hello world")
    res.sendFile("/home/saleem/nodejs-course/index.html")
})









server.listen(3000 , ()=>{
    console.log("server started")
})

