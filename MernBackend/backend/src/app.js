const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const hbs = require("hbs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("./db/conn");
const Register = require("./models/register");
const { waitForDebugger } = require("inspector");
const { escape } = require("querystring");
const { isMainThread } = require("worker_threads");
const port = 8000

const static_path = path.join(__dirname, '../public');
const tamplate_path = path.join(__dirname, '../tamplate/views');
const parcial_path = path.join(__dirname, '../tamplate/parcials');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express(static_path));

app.set('view engine', 'hbs');
app.set("views", tamplate_path);
hbs.registerPartials(parcial_path);


app.get("/login", (req, res) => {
    res.render("index")
});

app.get("/signup", (req, res) => {
    res.render("signup")
});

app.post("/login", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if (password === cpassword) {
            const registeremployee = new Register({
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword
            });

            const registered = await registeremployee.save();
            console.log(registered);
            

            // Generate and save the token
            const tok = await registeremployee.generateAuthToken();
            console.log(tok);

            res.cookie("jwt",tok,{
                expires:new Date(Date.now() + 30000),
                httpOnly:true
            });
            console.log(cookie);


            res.status(201).send("data saved successfully");
        } else {
            res.status(400).send("Passwords do not match");
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
});




app.post("/signup", async (req, res) => {
    try {
        const useemail = req.body.uemail
        const pass = req.body.pass
        const useremail = await Register.findOne({ email: useemail }) 
        // res.send(useremail.password);
        if (!useremail) {
            res.status(500).send("Invalid Login Credentials");
            return;
        }
        const isMatch = await bcrypt.compare(pass,useremail.password);   // pass means login credintials and usermail.password means in database
        console.log(isMatch);
        
        // const tok = await useemail.generateAuthToken();
        // console.log(tok);

        if(!isMatch){
            res.status(400).send("Invalid Login Credintials");
        }
        else{
            res.status(200).render('about');
        }
    }
    catch (err) {
        res.status(401).send(err);
    }
})

// const createToken = async () =>{
//     const token = await jwt.sign({_id:"656b0ee8d96cd2ac05f259e8"},"mynameiskunalandiamcoderandhacker");
//     console.log(token);

//     const userver = await jwt.verify(token,"mynameiskunalandiamcoderandhacker");
//     console.log(userver)



// }

// createToken();


app.listen(port, () => {
    console.log(`Server Listning on Port ${port} `)

});