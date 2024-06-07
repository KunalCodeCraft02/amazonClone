const { ok } = require("assert");
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose")
const User = require("./model/user");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const { error } = require("console");
const jwt   = require("jsonwebtoken");
JWT_SIGN = 'skefjhwefi@3#45%$(#@$%)wkuefhkfe(1@#$$)'

mongoose.connect("mongodb://127.0.0.1:27017/Demo-App")
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));


app.use('/', express.static(path.join(__dirname, 'static')))
app.use(express.json());
app.use(bodyParser.json());


app.get("/api/login", (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'login.html'));
});
app.get("/api/change-password", (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'changepassword.html'));
});

// ... (previous server-side code)

app.post("/api/change-password", async (req, res) => {
  try {
    const { token, newpassword } = req.body;

    if (!token) {
      return res.status(400).json({ status: 'error', error: 'Token is required' });
    }

    const usr = jwt.verify(token, JWT_SIGN);
    console.log(usr);

    // Add your logic here to change the password using `newpassword`

    res.json({ status: 'ok', message: 'Password change logic goes here' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
});

// ... (remaining server-side code)



app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).lean();
  if (!user) {
    return res.json({ status: 'error', error: 'Invalid username/password' });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SIGN);
    return res.json({ status: 'ok', data: token });
  }
  const tokens = token;
  res.json({ status: 'ok', data: tokens });
});

app.post('/api/register', async (req, res) => {

  const { username, password } = req.body;

  if (!username || typeof username !== 'string') {
    return res.json({ status: 'error', error: 'Invalid Username' })
  }
  if (!password || typeof password !== 'string') {
    return res.json({ status: 'error', error: 'Invalid password' })
  }
  if (password.length < 5) {
    res.json({
      status: 'error',
      error: 'Password should be at least 6 charectors'
    })
  }
  try {
    // Hash the password
    const hashpass = await bcrypt.hash(password, 10);

    // Create the user with the hashed password
    const response = await User.create({
      username,
      password: hashpass,
    });

    console.log("User created successfully", response);
    res.json({ status: 'success', message: 'User created successfully' });
  }
  catch (err) {
    console.error("Error creating user", err);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }


});

app.listen(5000, () => {
  console.log("Listing....");
});
