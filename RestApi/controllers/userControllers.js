const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userModel = require("../models/User");

const userRegistration = async (req, res) => {
  const { name, email, password, password_confirmation, tc } = req.body;
  const user = await userModel.findOne({ email: email });

  if (user) {
    res.status(401).json({
      message: "Email Already Exists",
    });
  } else {
    if (name && email && password && password_confirmation && tc) {
      if (password === password_confirmation) {
        const hashpassword = await bcrypt.hash(password, 10);
        const newDoc = new userModel({
          name: name,
          email: email,
          password: hashpassword,
          tc: tc,
        });

        try {
          const saveuser = await newDoc.save();
          console.log(saveuser);
          res.json({
            message: "Data Saved Successfully",
          });

          // Generate JWT authtoken
          const saved_user = await userModel.findOne({ email: email });
          const token = jwt.sign(
            { userId: saved_user._id },
            process.env.SECREAT_KEY,
            { expiresIn: "5d" }
          );
          console.log(token);
        } catch (error) {
          console.error("Error in userRegistration:", error);
          res.status(500).json({ message: "Internal Server Error" });
        }
      } else {
        res.status(404).json({
          message: "Password doesn't match",
        });
      }
    } else {
      res.status(401).json({
        message: "All Fields are required",
      });
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const user = await userModel.findOne({ email: email });

    if (user !== null) {
      const userPasswordString = user.password.toString();
      const passwordString = password.toString();

      const isMatch = await bcrypt.compare(passwordString, userPasswordString);

      if (user.email === email && isMatch) {
        const token = jwt.sign({ userId: user._id }, process.env.SECREAT_KEY, {
          expiresIn: "5d",
        });
        res.status(200).json({
          message: "Login Successful",
          tokens: token,
        });
      } else {
        res.status(400).json({
          message: "Credentials are not valid",
        });
      }
    } else {
      res.json({
        message: "User is not registered",
      });
    }
  } else {
    res.json({
      message: "All Fields Are required",
    });
  }
};

const changepassword = async (req, res) => {
  const { password, password_confirmation } = req.body;

  if (password !== password_confirmation) {
    return res.json({
      message: "Password and confirmation do not match",
    });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    console.log(hashpassword)

    console.log("Password changed successfully");
    console.log(req.user);

    res.json({
      message: "Password changed successfully",
    });
  }
};

module.exports = { userRegistration, loginUser, changepassword };