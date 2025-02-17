const express = require("express");
const { default: mongoose } = require("mongoose");
const validator = require("validator");


const menSchema = new mongoose.Schema({
    ranking:{
     type:Number,
     required:true,
     unique:true,
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    contry:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"

    }

})

const MensRanking = new mongoose.model("MenRanking",menSchema);

module.exports= MensRanking;
