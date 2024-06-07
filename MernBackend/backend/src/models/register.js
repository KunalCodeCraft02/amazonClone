const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");


const employeeschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    token: {
        type: String,
        require: true
    }

});



employeeschema.methods.generateAuthToken = async function () {
    try {
        const token = await jwt.sign({ _id: this._id.toString() }, "mynameiskunalandiamcodeandhacker");
        // this.token = this.token.concat({ token: token });
        this.token = token;   // we connecting a token data to await token data 
        const savetoken = await this.save();  // Remove the argument here
        console.log(savetoken);
        
        return token;
    } catch (err) {
        console.log(err);
    }



}



// employeeschema.pre("save", async function(next){
//     // const passwordHash = await bcrypt.hash(password,10);
//     // console.log(passwordHash);                                // we encrypting password in this stage save is save method
//         this.password = await bcrypt.hash(this.password,10);
//         next();

// })
employeeschema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmpassword = await bcrypt.hash(this.confirmpassword, 10);
    // this.confirmpassword = await bcrypt.hash(this.confirmpassword,10)
    next();

})

const Register = new mongoose.model("Register", employeeschema);

module.exports = Register;