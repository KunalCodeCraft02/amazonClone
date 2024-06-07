const express = require("express");
const app = express();
const path = require("path")
const dotenv = require('dotenv').config()
const User = require("./database")
const route = require("./router");
const bodyParser = require("body-parser");



// const pathdir = path.join(__dirname,"/public")
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.json());
// app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs");
app.use(route);



app.listen(process.env.PORT,()=>{
    console.log("Listning..")
})