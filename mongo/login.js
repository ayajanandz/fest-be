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

      // Returning everything to the frontend except the password from the database
      console.log(userWithoutPassword);
      res.send({ body: userWithoutPassword, status: 200 });
    } else {
      // Password is incorrect
      console.log("No Match !")
      res.status(401).send({ message: "Incorrect password" });
    }
  } else {
    console.log("No match found!");
    res.status(404).send({ message: "User not registered" });
  }
};

module.exports = {
  login,
};
