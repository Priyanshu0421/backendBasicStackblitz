// import mongoose from "mongoose"

// const userSchema = new mongoose.Schema({
//   username : String,
//   email : String,
//   isActive : Boolean
// })

// export const User = mongoose.model("User" , userSchema)


//  creating schema wth defining them using objects 

import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username:{
    typeof : String,
    required : true,
    unique : true,
    lowercase: true
  }, 
  email: {
    typeof: String,
    required : true,
    unique: true,
    lowercase: true
  },
  password : {
    typeof : String,
    required : true
  }
} , {timestamps : true})

export const User = mongoose.model('User' , userSchema)