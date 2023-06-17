"use strict";

const { connectDB } = require("./connect.js");

const login = async (req, res) => {
  const { email, password } = req.body;
  

  // CONNECTION WITH COLLECTIONS

  let mongoDB = await connectDB();
  let collection = mongoDB.collection("users");
 
  let dbResponse = await collection.findOne({ Email: email });

  // console.log(Response);
  if (dbResponse) {
    if (password === dbResponse.Password) {
      //  console.log(Response);
      
      // console.log("This user has liked movies bearing id: ", likedResponse.Movieid);
      
      
       console.log(dbResponse);
      res.send({ body: dbResponse, status: 200,  });
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
