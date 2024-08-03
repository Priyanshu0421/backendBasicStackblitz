import mongoose, { mongo, Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
  username : {
    typeof : String,
    required: true,
    unique : true,
    lowercase : true
  },
  email : {
    typeof : String,
    required: true,
    unique : true,
    lowercase : true
  },
  password : {
    typeof: String,
    required : true
  },
} , {timestamps : true})

export const User = Mongoose.model('User' , userSchema)