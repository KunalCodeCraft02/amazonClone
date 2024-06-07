const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    tc:{
        type:Boolean,
        required:true
    }
});

const userModel = mongoose.model("user",userSchema);

module.exports = userModel
