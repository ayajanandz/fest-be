'use strict';
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://da_anandz:mongosh.exe11@cluster0.rqfwfkr.mongodb.net/?retryWrites=true&w=majority"
const databaseName ='testing2'
const client = new MongoClient(uri);

const connectDB = async () => {
    let result =  await client.connect();
    let mongoDB = result.db(databaseName);
    return mongoDB;
}

module.exports = {
    connectDB
}


