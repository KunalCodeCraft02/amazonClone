const mongoose = require("mongoose");
const  validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/Olmpics")
.then(()=> console.log("Connection Succesful....."))
.catch((err)=> console.log("Can`t Connect to Database"));


