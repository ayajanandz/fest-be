'use strict';
const { register } = require('./register');
const { login } = require("./login");
const { amura } = require("./amura");
const { amuraPayee } = require("./amuraPayee");
const { admin } = require('./admin');
const { generateOtp } = require ('./otpgeneration');
const { showotp } = require('./showotp');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB using MongooseJS");
});

const app = express();

app.use(cors());
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", async(req,res) => {
    console.log(res.data);
          await register(req, res);
  })

  app.post("/login", async(req, res) => {
    await login(req, res);
 });

 app.post("/amura", async(req,res) => {
   await amura(req,res);
 });

 app.post("/amuraPayee", async(req, res) =>{
          await amuraPayee(req,res);
 })

 app.get("/admin", async(req,res) => {
  let responseData = await admin(req);
   res.send(responseData);
 })

 app.post("/verified", async(req,res) =>{
  let verification = await generateOtp(req);
  res.send(verification)
 })

 app.post("/otp", async (req,res) =>{
     await showotp(req,res);
 })

  app.listen(port, () => {
    console.log("Server is live and listening at port :", port);
  })