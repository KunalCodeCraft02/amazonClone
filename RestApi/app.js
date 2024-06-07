const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors")
const mongoconnect = require("./config/connectdb");
const router = require("./routes/userRoutes");

app.use(cors())
app.use(express.json());


app.use("/api/user",router)



app.listen(process.env.PORT,()=>{
    console.log("Listining....");
});

