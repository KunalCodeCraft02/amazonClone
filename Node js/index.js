// const abcd = (a,b)=>{
//     console.log("Hello World")
// }

// const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.end("Hello Form The Other Side")
// })
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("Listning On Port No 8000")

// })

// const http = require("http")
// const server = http.createServer((req, res) => {
//     if (req.url == "/") {
//         res.end("Hello form home side")
//     }
//     else if (req.url == "/about") {
//         res.end("hello form the about side")

//     }
//     else if (req.url == "/contact") {
//         res.end("hello form the contact side")

//     }
//     else {
//         res.writeHead(404)
//         res.end("404 Page not found")
//     }
// })

// server.listen(8000, "127.0.0.1", () => {
//     console.log("Listning on port 8000")
// })
// 

// ~~~~ Reading And Writting data into Json file ~~~~

// const fs = require("fs")
// const biodata = {
//     name: "vinod",
//     age: 26,
//     channel: "Game_on",
// };

// console.log(biodata.channel)
// const jsondata = JSON.stringify(biodata)
// console.log(jsondata)

// const jsondata = JSON.stringify(biodata)
// fs.writeFile("json1.json",jsondata,(err,data)=>{
//     console.log("done")

// })

// const jsondata = JSON.stringify(biodata)

// fs.readFile("json1.json","utf-8",(err,data)=>{
//     const orgdata = JSON.parse(data)
//     console.log(data)
//     console.log(orgdata)
// })



// const fs = require("fs")
// const  biodata = {
//     name: "kunal",
//     age: 18,
//     place :"chikhli"
// }

// const jsondata = JSON.stringify(biodata)
// fs.writeFile("json1.json",jsondata,(err,data)=>{
//     console.log("Done")

// })

// fs.readFile("json1.json","utf-8",(err,data)=>{
//     const orgdata = JSON.parse(data)
//     console.log(orgdata)

// })





// ~~~ Events In Node js ~~~ //

// const EventEmitter = require("events");

// const event = new EventEmitter();

// event.on("sayMyName",()=>{
//     console.log("Your name is kunal")

// })


// event.emit("sayMyName");


// const EventEmitter = require("events")

// const event = new EventEmitter();

// event.on("checkPage",(sc,msg)=>{
//     console.log(`status code is ${sc} and the massage is ${msg}`)
// });


// event.emit("checkPage",200,"ok")


// ~~~~~~~~~~~~~~~~~~~~~ Welcome TO Expree~~~~~~~~~~~~~~~~~~~~~~~~ //






// const fs =  require("fs")

// const http = require("http")
// const server = http.createServer((req,res)=>{
//     if(req.url == "/"){
//         res.writeHead(200,{"content-type": "text/html"})
//         res.end("<h2>Welcome Form Home Side</h2>")
//     }
//     else if(req.url == "/about"){
//        const data = fs.readFileSync('index.html')
//         res.end(data.toString())
//     }
//     else if(req.url == "/whatsapp"){
//         res.writeHead(200,{"content-type": "text/html"})
//         res.end("Welcome to whatsapp")
//     }
//     else if(req.url == "/contact"){
//         res.writeHead(200,{"content-type": "text/html"})
//         res.end("Welcome to contact side")
//     }
//     else if(req.url == "/json"){
//         const Jsondata = fs.readFileSync("json1.json")
//         res.end(Jsondata)

//     }
//     else{
//         res.writeHead(404,{"content-type": "text/html"})
//         res.end("<i>404 Page Not Found</i>")
//     }

// })

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("Listning....")
// })


// const fs = require("fs")
// const http = require("http")

// const server = http.createServer((req,res)=>{
//     if(req.url == "/"){
//         res.writeHead(200);
//         res.end("Welcome to home side");
//     }
//     else if(req.url == "/about"){
//         res.writeHead(200)
//         const data = fs.readFileSync("index.html")
//         res.end(data.toString)
//     }
// })

// server.listen(5000,"127.0.0.1",()=>{
//     console.log("Lisning.....")

// })

// ~~~ path Module ~~~ //

// const path = require("path")
// console.log(path.dirname("C:/Users/kunal/OneDrive/Desktop/Node js/index.js"));
// console.log(path.extname("C:/Users/kunal/OneDrive/Desktop/Node js/index.js"));
// console.log(path.basename("C:/Users/kunal/OneDrive/Desktop/Node js/index.js"));

// const myPath = path.parse("C:/Users/kunal/OneDrive/Desktop/Node js/index.js");
// console.log(myPath);






// const express = require("express");
// const fs = require("fs")
// const app = express();

// app.get("",(req,res)=>{
//     res.send(`<h1>Welcome to Home Side</h1> <a href="/about">Go to About page</a> `);
// });
// app.get("/about",(req,res)=>{
//     res.send(`<a href="/grow"><button>Go to Grow</button></a>`);

// });
// app.get("/grow",(req,res)=>{
//     res.send("welcome to grow");
// });

// app.listen(5000)



// ~~~ how to import html file in other folder ~~~~ //



// app.get('/profile',(req,res)=>{
//     const user ={
//         name: "Kunal Bodkhe",
//         Email: "Kunal@gmai.com",
//         city: "Chikhli"
//     }
//     res.render('profile',{user})

// })
// app.get('*',(req,res)=>{
//     res.sendFile(`${publicpath}/help.html`);
// })

// app.listen(5000);



// which folder is used for render html css js file //

// const express = require("express");
// const path = require("path");
// const app = express();

// const publicpath = path.join(__dirname,'public');  /// we saying which folder to be use
// app.use(express.static(publicpath));

// app.get("",(req,res)=>{
//     res.sendFile(`${publicpath}/main.html`)
// })
// app.get("/about",(req,res)=>{
//     res.sendFile(`${publicpath}/about.html`)
// })

// app.listen(5000)



// Telplate Engine using hbs & ejs //

// const express = require("express");
// const path = require("path");
// const app = express();

// const publicpath = path.join(__dirname,'views')
// app.use(express.static(publicpath));


// app.set('view engine','ejs')

// app.get("",(req,res)=>{
//     res.render("profile")
// })
// app.get("/about",(req,res)=>{
//     res.render("nods")
// })
// app.get("/grow",(req,res)=>{
//    const  user ={
//         name: "kunal",
//         age : "18",
//         city : "Chikhli"
    // }
//     res.render("profile",{user})
// })

// app.listen(5000);



// render & hbs  //
// const express = require("express");
// const path = require("path");
// const app = express();

// // const publicpath = path.join(__dirname,'public'); 

// // app.use(express.static(publicpath));

// app.set('view engine',"hbs")

// app.get("/grow",(req,res)=>{
//     res.render('index',{
//         name :"kunal"
//     });
// })
// app.get('',(req,res)=>{
//    res.send("welcome to home")
// })
// app.get('/about',(req,res)=>{
//     res.send("Welcome to about")
// })

// app.listen(5000)



// changing name of view folder //

// const express = require("express");
// const path = require("path");
// const app = express();

// // const publicpath = path.join(__dirname,'public'); 
// const temppath = path.join(__dirname,"templates");
// // app.use(express.static(publicpath));

// app.set('view engine',"hbs")
// app.set('views', temppath)  // using of this code line we changed name of folder name views to templates

// app.get("/grow",(req,res)=>{
//     res.render('index',{
//         name :"kunal"
//     });
// })
// app.get('',(req,res)=>{
//    res.send("welcome to home")
// })
// app.get('/about',(req,res)=>{
//     res.send("Welcome to about")
// })

// app.listen(5000)



// parcials in express //

// const hbs = require("hbs")
// const express = require("express");
// const path = require("path");
// const app = express();

// // const publicpath = path.join(__dirname,'public'); 
// const temppath = path.join(__dirname,"parcial");
// hbs.registerPartial(temppath);
// // app.use(express.static(publicpath));

// app.set('view engine',"hbs")
// // app.set('views', temppath)  // using of this code line we changed name of folder name views to templates

// // app.get("/grow",(req,res)=>{
// //     // res.render('index',{
// //     //     name :"kunal"
// //     // });
// // })
// app.get('',(req,res)=>{
//    res.send("welcome to home")
// })
// app.get('/about',(req,res)=>{
//     res.send("Welcome to about");
// })

// app.listen(5000)

// Parcial in express crystal clear //

// const express = require("express");
// const path = require("path");
// const app = express();
// const hbs = require("hbs")

//   // const publicpath = path.join(__dirname,'public'); 
//   // const temppath = path.join(__dirname,"public");
//   // app.use(express.static(publicpath));

// app.set('view engine',"hbs")
// const hbspath = path.join(__dirname,"views/parcials") // saying were our parcial folder and file is ?

// hbs.registerPartials(hbspath) // registering  parcial thorw hbs 

// app.get("/grow",(req,res)=>{
//     res.render('index',{
//         name :"kunal"
//     });
// })
// app.get('',(req,res)=>{
//    res.send("welcome to home")
// })
// app.get('/about',(req,res)=>{
//     res.send("Welcome to about")
// })
// app.get('*',(req,res)=>{
//     res.render('404',{
//         errorcom : "You cant access this page"
//     })
// })

// app.listen(5000)



// sheriyan Express js //

