// const fs= require('fs');

// let fun1=()=>{
//     return console.log('this is a function one');
// }

// fun1();
// f1= performance.now();


// let readfile= fs.readFileSync('index.js', 'utf-8');

// // let readfile= fs.readFile('index.js', 'utf-8', (err , data)=>{
// //     if(err){
// //         console.log(err);
// //     }
// //     console.log(data);
// // })
// console.log(readfile);

// let fun=()=>{
//    return console.log('this is a function two');
// }

// fun();

// f2= performance.now();
// console.log(f2-f1);

// day 2 


// const os = require('node:os');

// console.log(os.networkInterfaces());
// console.log(`Platform: ${os.platform()}`);
// console.log(`Architecture: ${os.arch()}`);
// console.log(`Free Memory: ${os.freemem()} bytes`);
// console.log(`Total Memory: ${os.totalmem()} bytes`);
// console.log(`Home Directory: ${os.homedir()}`);
// console.log(`Temporary Directory: ${os.tmpdir()}`);
// console.log(`System Uptime: ${os.uptime()} seconds`);


// callback function 

function sum(a,b,total){
    return total(a,b)
}

function total(a,b){
    return a+b
}

console.log(sum(7,8,total));