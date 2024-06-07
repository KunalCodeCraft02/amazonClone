const express = require("express");
const app = express();
const path = require("path");
const Backend = require("./models/schema");
const hbs = require("hbs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
require("./dbb/conn");
const auth = require("./middleware/auth");
const tem_path = path.join(__dirname, '../tamplatee/views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser()); // Add cookie-parser middleware

const port = 5000;

app.set('view engine', 'hbs');
app.set("views", tem_path);

app.get("/signup", (req, res) => {
    res.render('index');
});

app.get("/login", (req, res) => {
    res.render('login');
});

app.get("/secret",(req, res) => {
    console.log(req.cookies.jwt);
    res.render('secret');
});

app.post("/signup", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if (password === cpassword) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const Bpractice = new Backend({
                email: req.body.email,
                password: hashedPassword,
                confirmpassword: req.body.confirmpassword
            });

            const backend = await Bpractice.save();
            console.log(backend);

            const token = await Bpractice.generateAuthToken();
            console.log(token);

            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 60000),
                httpOnly: true
            });

            res.send("Data saved successfully");
        } else {
            res.status(400).send("Passwords do not match");
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post("/login", async (req, res) => {
    try {
        const uemail = req.body.uemail;
        const upass = req.body.upass;

        const user = await Backend.findOne({ email: uemail });

        if (user) {
            const isMatch = await bcrypt.compare(upass, user.password);
            const token = await user.generateAuthToken();

            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 60000),
                httpOnly: true
            });

            if (isMatch) {
                res.status(200).render('about');
            } else {
                res.status(400).send("Invalid Login Credentials");
            }
        } else {
            res.status(400).send("User not found");
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`Listening On Port ${port}`);
});
