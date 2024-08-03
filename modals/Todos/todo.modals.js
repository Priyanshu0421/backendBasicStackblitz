import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  content : {
    typeof : String , 
    required : true
  },
  complete : {
    typeof : Boolean,
    default : false
  }, 
  createdBy : {
    type : mongoose.Schema.ObjectId,
    ref : "User",
  }, 
  subTodos : [
    {
      type : mongoose.Schema.ObjectId,  // taking refrence from other data models
      ref: "SubTodo",
    } // Array of subtodos
  ]
} , {timestamps :true})

export const ToDo = mongoose.model("ToDo" , todoSchema)