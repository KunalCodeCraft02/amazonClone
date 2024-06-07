const express = require("express")
const app = express();
require("./db/connection");
const MensRanking = require("./models/mens");
const { get } = require("mongoose");
const port = 8000
app.use(express.json());

app.post("/mens",async(req,res)=>{
    try{
    const addingMensRecord = new MensRanking(req.body);
    console.log(addingMensRecord);
    const savedata = await addingMensRecord.save();
    res.status(201).send(savedata);
    }catch(err){
        res.status(404).send(err)
    }
});

app.get("/means", async(req,res)=>{
    try {
        const getMen = await MensRanking.find()
        res.status(200).send(getMen);
        
    } catch (err) {
        res.status(400).send(err)

    }
})

app.get("/men/:id", async(req,res)=>{
    try{
    const _id = req.params.id;
    const getmans = await MensRanking.findById(_id);
    res.send(getmans);
    }catch(err){
        res.status(400).send(err);
    }


})

app.patch("/pat/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getpatch = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.status(200).send(getpatch)

    }catch(err){
        res.status(400).send(err)
         
    }
})
app.patch("/dele/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getpatch = await MensRanking.findByIdAndDelete(_id,req.body);
        res.status(200).send(getpatch)

    }catch(err){
        res.status(400).send(err)
         
    }
})



app.listen(port);







app.listen(5000); 