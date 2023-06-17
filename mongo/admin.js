'use strict';
const mongoose = require("mongoose");

const { connectDB } = require("./connect");



const admin = async (req) => {
  console.log("Admin Acess Showing Data:")
  let category = req.query.category
  let mongoDB = await connectDB();
  let collection = mongoDB.collection(category);
  let data = await collection.find({}).toArray();
  console.log(data);
  
  return data;
  
//   let dbResponse = await collection.findOne({ Email: email });


}

module.exports = {
    admin,
};