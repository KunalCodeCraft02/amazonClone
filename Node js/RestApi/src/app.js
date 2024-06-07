// const express = require("express");
// const app = express();
// require("./db/conn")
// const Student = require("./modules/student");


// app.use(express.json());

// sending data thorw post useing promise and .then

// app.post("/student", async (req,res)=>{
//     const user = await new Student(req.body)
//     user.save(user);
//     res.send(user);

// });

//  sending data throw post using async await and Try And catch //

// app.post("/student",async(req,res)=>{
//     try{
//     const user = new Student(req.body);
//     const createuser = await user.save();
//     res.status(201).send(createuser)
//     }catch(e){
//         res.status(400).send(e)
        
//     }
// })


// reading data of json throw get request using find() method //

// app.get("/student",async(req,res)=>{
//     try{
//         const studentdata = await  Student.find();
//         res.send(studentdata);
//     }catch(e){
//         res.status(400)
//         res.send(e)

//     }
// })



// finding json data by id //

// app.get("/student/:id", async(req,res)=>{
//     const _id = req.params.id
//     const studentdata = await Student.findById(_id)
//     console.log(studentdata)

//     if(!studentdata){
//         return req.statusCode(404).send();
//     }
//     else{
//         res.send(studentdata);
//     }

// })



// app.listen(5000);