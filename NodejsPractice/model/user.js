const mongoose = require("mongoose");
const { StringDecoder } = require("string_decoder");
const jwt = require("jsonwebtoken")

const UserSchema = new mongoose.Schema({
    username: {type:String, required:true,unique:true},
    password: {type:String, required:true},
})

const model = mongoose.model('Userdata',UserSchema);


module.exports = model;
