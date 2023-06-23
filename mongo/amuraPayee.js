'use strict';
const mongoose = require("mongoose");

const { connectDB } = require("./connect");



const amuraPayee = async (req, res) => {
  const { email, name, transactionId } = req.body;
  let status = "false";
  // console.log(name , email, transactionId);
  let mongoDB = await connectDB();
  let collection = mongoDB.collection("amuraPayee");
  // let timestamp= new Date.now().toString();
  let dbResponse = await collection.findOne({ Email: email });
  if(!dbResponse){
    try{
    collection.insertOne({
        Name: name,
        Email:email,
        TransactionId:transactionId,
        Verified:status,
        OTPgenerated:"false",
        // Time:timestamp,
    })
    console.log(name,"entered the transaction id ->",transactionId);
    res.send({body:"Data Submitted Successfuly !",status:200})
  } catch(err){
    console.log(err);
  }
  


}else {
    console.log("User record already exists..");
    res.send({body:dbResponse, status:400})
}
}

module.exports = {
    amuraPayee,
};