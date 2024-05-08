const fs= require('fs');

let fun1=()=>{
    return console.log('this is a function one');
}

fun1();
f1= performance.now();


let readfile= fs.readFileSync('index.js', 'utf-8');

// let readfile= fs.readFile('index.js', 'utf-8', (err , data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })
console.log(readfile);

let fun=()=>{
   return console.log('this is a function two');
}

fun();

f2= performance.now();
console.log(f2-f1);