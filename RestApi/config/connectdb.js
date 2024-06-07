const mongoose = require("mongoose");

const mongoconnect = mongoose.connect("mongodb://127.0.0.1:27017/rostApi")
.then(()=> console.log("DATABASE CONNECTED SUCCESSFULLY..."))
.catch((err)=> console.log("CAN`T CONNECT TO DATABASE"));


module.exports = mongoconnect;
