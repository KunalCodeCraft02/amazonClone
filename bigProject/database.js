const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/BIGPROJECT")
.then(()=> console.log("DATABASE CONNECTED"))
.catch((e)=> console.log("CAN`T CONNECT TO THE DATABASE"));




const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const userModel = mongoose.model("bigdata",schema);

module.exports = userModel;



