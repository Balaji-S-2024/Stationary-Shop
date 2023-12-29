const mongoose = require("mongoose");

const mongo_uri = "mongodb+srv://balajisankar0202:balaji12345@stationary.kszu7zb.mongodb.net/?retryWrites=true&w=majority"

const connectDatabase = () => {
  mongoose
    .connect(mongo_uri)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;