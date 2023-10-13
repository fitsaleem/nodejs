const fs=require("fs");
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

// creating server with the help of express
const express= require("express");
const server=express();



// custome middleware

// server.use((req,res,next)=>{
// console.log(req.method,req.ip,req.hostname,new Date(), req.get('User-agent'))
// next()
// })


// another custom middleware for authentation

server.use(express.json()); //it will read body

// const auth=(req,res,next)=>{
//     if(req.body.password=="123"){
//         next()
//     }else{
//         res.sendStatus(401)
//     }
// }



// server.use(auth);




// server.get("/", (req,res)=>{
//     // res.send("hello world")
//     // res.sendFile("/home/saleem/nodejs-course/index.html")
//      res.json(products)
// })


// server.post("/demo", (req,res)=>{
//     res.json({type: 'get'})
// })

// server.put("/demo", (req,res)=>{
//     res.json({type: 'put'})
// })

// server.patch("/demo", (req,res)=>{
//     res.json({type: 'patch'})
// })

// server.delete("/demo", (req,res)=>{
//     res.json({type: 'delete'})
// })



// rest apis (CRUD)


// 1 create:post

server.post("/products",(req,res)=>{
    products.push(req.body)
    res.json(req.body)
})

// 2 read:get 

server.get("/products" ,(req,res)=>{
    res.json(products)
})

server.get("/products/:id",(req,res)=>{
   const id=  +req.params.id;   //plus signe will convert it into number
   const product=products.find(value=>
    value.id===id
   )
   res.json(product)
})

// 3: update(put) 

server.put("/products/:id",(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex(value=>value.id===id)
    products.splice(productIndex,1,{...req.body, id:id})
    res.status(201).json();

})

// update(patch) 

server.patch("/products/:id",(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex(value=>value.id===id)
    const product=products[productIndex]
    products.splice(productIndex,1,{...product, ...req.body})
    res.status(201).json();

})


//delete(delete):

server.delete("/products/:id",(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex(value=>value.id===id)
    const product=products[productIndex]
    products.splice(productIndex,1);
    res.status(201).json(product);
})




server.listen(3000 , ()=>{
    console.log("server started")
})

