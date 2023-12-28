const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,

    validate: [validator.isEmail, "Please Enter a valid Email"], // validator.isEmail cheack given email String and after varfiying is email correct type or not of true
  },

  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should have more than 4 characters"],
    select: false, // this will make sure password is sended with data to anyone not even admin when he req for user data
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;