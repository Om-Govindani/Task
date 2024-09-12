require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://omgovindani:2612@task.fpjvs.mongodb.net/?retryWrites=true&w=majority&appName=Task"
);
const express = require("express");
const cors = require("cors");
const app = express();

const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");

const User = require("./models/user.model");
const port = 8080;
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server Working fine at ${port}`);
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ error: true, message: "Full Name is required" });
  }
  if (!email) {
    return res.status(400).json({ error: true, message: "Email is required" });
  }
  if (!password) {
    return res
      .status(400)
      .json({ error: true, message: "Password is required" });
  }
  const isUser = await User.findOne({ email: email });
  if (isUser) {
    return res
      .status(400)
      .json({ error: true, message: "User Already exists" });
  }
  const user = new User({
    name,
    email,
    password,
  });
  await user.save();
  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 3600,
  });
  return res.json({
    error: false,
    user,
    accessToken,
    message: "Registration Successful",
  });
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (!email)
    return res.status(400).json({ error: true, message: "Email is required" });
  if (!password)
    return res
      .status(400)
      .json({ error: true, message: "Password is required" });

  const userInfo = await User.findOne({ email: email });

  if (!userInfo)
    return res.status(400).json({ error: true, message: "User not found" });
  if (userInfo.email == email && userInfo.password == password) {
    const user = { user: userInfo };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "3600m",
    });

    return res.json({
      error: false,
      email,
      accessToken,
      message: "Login Successfull Successful",
    });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "Invalid Credentials" });
  }
});

module.exports = app;
