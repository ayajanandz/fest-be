"use strict";

const mongoose = require("mongoose");
const { connectDB } = require("./connect");

const amura = async (req, res) => {
  console.log(req.body);
  const { mail, name } = req.body;
  let mongoDB = await connectDB();
  let collection = mongoDB.collection("amura");
  let dbResponse = await collection.findOne({ Email: mail });
  if (dbResponse) {
    res.send({ message: "User already exists " });
  } else {
    try {
      collection.insertOne({
        Username: name,
        Email: mail,
      });
      console.log("Record added successfully !");
      res.send({
        "success": true
    })
    } catch (err) {
      console.log(err);
    }
  }
 
  
};

module.exports = {
    amura,
}
