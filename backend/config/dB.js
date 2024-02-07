const mongoose = require("mongoose");

const mongo_uri = "mongodb://127.0.0.1:27017/ownmostationery"

const connectDatabase = () => {
  mongoose
    .connect(mongo_uri)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;