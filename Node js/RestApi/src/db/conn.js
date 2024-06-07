const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/student-api")
.then(()=> console.log("Connection Succesfull...."))
.catch((err)=> console.log("Connection Failed ",err));


