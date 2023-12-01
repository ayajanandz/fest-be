'use strict';


const { connectDB } = require("./connect");



const showotp = async (req,res) => {
    const {email} = req.body;
  console.log("Showing otp For the user:",email);
//  
  let mongoDB = await connectDB();
  let collection = mongoDB.collection("amuraPayee");
  let dbResponse = await collection.findOne({Email:email})
  console.log(dbResponse);
  if(!dbResponse){
    res.send({ body: {}});
  }else {
    res.send({body: dbResponse, status:200});
  }


}

module.exports = {
    showotp
};