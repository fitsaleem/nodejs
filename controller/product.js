const fs=require("fs");
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


// rest apis (CRUD)
exports.createProduct=(req,res)=>{
    products.push(req.body)
    res.json(req.body)
};

exports.getAllProducts=(req,res)=>{
    res.json(products)
}

exports.getProduct=(req,res)=>{
    const id=  +req.params.id;   //plus signe will convert it into number
    const product=products.find(value=>
     value.id===id
    )
    res.json(product)
 }

 exports.replaceProduct=(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex(value=>value.id===id)
    products.splice(productIndex,1,{...req.body, id:id})
    res.status(201).json();

}

exports.updateProduct=(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex(value=>value.id===id)
    const product=products[productIndex]
    products.splice(productIndex,1,{...product, ...req.body})
    res.status(201).json();

}

exports.deleteProduct=(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex(value=>value.id===id)
    const product=products[productIndex]
    products.splice(productIndex,1);
    res.status(201).json(product);
}