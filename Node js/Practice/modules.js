// Internal Moduel

const { required } = require("nodemon/lib/config");

// const {add,sub} = require("./index")
// console.log(add(5,5))
// console.log(sub(5,5))


// const {add,sub,mul,div} = require("./index")
// console.log(add(12,12))
// console.log(sub(12,12))
// console.log(mul(12,12))
// console.log(div(12,12))


// ~~~ File Handling In node js ~~~

// const { isUtf8 } = require("buffer")
// const fs = require("fs")

// fs.writeFile("read.txt","Welcome To My File",(err)=>{
//     console.log("File Created Successfully")
// })

// fs.readFile("read.txt","utf-8",(err,data)=>{
//     console.log(data)

// })

// fs.appendFile("read.txt","Please Like And Subscribe",(err)=>{
//     console.log("Data append successfully")
// })

// fs.unlink("./read.txt",(err)=>{
//     console.log("File Deleted Successfully")

// })

// const os = require("os")

// console.log(os.cpus())

// console.log(os.networkInterfaces())


const http = require("http");
const server = http.createServer((req,res)=>{
    res.end("Hello Form The Other Side")
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listning On Port No 8000")
    
})










