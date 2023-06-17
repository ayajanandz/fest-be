'use strict';
const mongoose = require("mongoose");

const { connectDB } = require("./connect");



const showotp = async (req,res) => {
    const {email} = req.body;
  console.log("Showing otp For the user:",email);
//  
  let mongoDB = await connectDB();
  let collection = mongoDB.collection("amuraPayee");
  let dbResponse = await collection.findOne({Email:email})
  console.log(dbResponse);
  if(dbResponse.OTPgenerated==null){
    res.send({ body: false});
  }else {
    res.send({body: dbResponse, status:200});
  }
//   if(!data){
//     return null;
//   }else {
//   return data.body;
//   }
  
//   let dbResponse = await collection.findOne({ Email: email });


}

module.exports = {
    showotp
};