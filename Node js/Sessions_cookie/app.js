const express = require("express");
const app = express();
const sessions = require("express-session");
const port = 7000;


app.use(sessions({
    resave:true,
    saveUninitialized:true,
    secret:"holobholahola"
}))




app.get("/",(req,res)=>{
    req.session.ban = true;
    res.send("Welcome to Home Page");
    
})
app.get("/checkban",(req,res)=>{
    console.log(req.session);
    if(req.session.ban == true){
        res.send("404 You are Banned form the Webite")
        res.status(200);
    }
  
  
    res.send("Console dekho")
})

app.get("/removeS",(req,res)=>{
    req.session.destroy(function(err){
        if(err) throw err;
        res.send("baned removed")

    })
})
app.listen(port);


