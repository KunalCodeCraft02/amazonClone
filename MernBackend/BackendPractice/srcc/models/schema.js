const mongoose  = require("mongoose");
const validator = require("validator");
const bcrypt    = require("bcrypt");
const jwt       = require("jsonwebtoken");
const express   = require("express");
const route     = express();



const backendpractice = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
        type:String,
        // required:true
        }
    }]
});

backendpractice.methods.generateAuthToken = async function(){
    try{
        const token = await jwt.sign({_id: this._id.toString()},"mynameiskunalandiamcoderandhacker")
        this.tokens = await this.tokens.concat({token:token})
        // this.token = token
        await this.save();
        // return token
        return this.tokens

    }
    catch(err){
        console.log(err);

        
    }
}

// backendpractice.pre("save", async function(next){
//     this.password = await bcrypt.hash(this.password,10);
//     this.confirmpassword = await bcrypt.hash(this.confirmpassword);
//     next();

// })

const Backend = new mongoose.model("Backend",backendpractice);


module.exports = Backend;
