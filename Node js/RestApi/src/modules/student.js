const mongoose = require("mongoose")
const validator = require("validator")


const studentschema = new mongoose.Schema({
    name:{
        type:String,
    
        
    },
    email:{
        type:String,
        
    },
    phone:{
        type:Number,
     
    },
    address:{
        type:String,
       
    }
    
})

const Student = new mongoose.model('Student',studentschema);


module.exports = Student;