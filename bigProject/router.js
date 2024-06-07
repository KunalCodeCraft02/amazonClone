const express = require("express");
const route = express();
const User = require("./database")
route.get("/",(req,res)=>{
    res.render("index")
});

route.post("/register",async(req,res)=>{
    const data = await User.create(req.body)
    console.log(data)
    res.send(data)
});

module.exports = route;
