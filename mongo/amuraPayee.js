'use strict';
const mongoose = require("mongoose");

const { connectDB } = require("./connect");



const amuraPayee = async (req, res) => {
  const { email, name, transactionId } = req.body;
  console.log(name , email, transactionId);
  let mongoDB = await connectDB();
  let collection = mongoDB.collection("amuraPayee");
  let dbResponse = await collection.findOne({ Email: email });
  if(!dbResponse){
    try{
    collection.insertOne({
        Name: name,
        Email:email,
        TransactionId:transactionId,
    })
    res.send({body:true,status:200})
  } catch(err){
    console.log(err);
  }
  


}else {
    console.log("User record already exists..");
    res.send({body:false, status:400})
}
}

module.exports = {
    amuraPayee,
};