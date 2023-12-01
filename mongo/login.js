"use strict";

const { connectDB } = require("./connect.js");

const login = async (req, res) => {
  const { email, password } = req.body;
  

  // CONNECTION WITH COLLECTIONS

  let mongoDB = await connectDB();
  let collection = mongoDB.collection("users");
 
  let dbResponse = await collection.findOne({ Email: email });


  
  if (dbResponse) {
    if (password === dbResponse.Password) {
      const { Password, ...userWithoutPassword } = dbResponse;
      
      // Returning everything to the frontend except the password from the databse

      console.log(userWithoutPassword);
      res.send({ body: userWithoutPassword, status: 200,  });
    } else {
      res.send({ body: {}, status: 200 });
    }
  } else {
    res.send({ message: "User not resgistered" });
  }
};

module.exports = {
  login,
};
