import mongoose from "mongoose"

const subTodoSchema = new mongoose.Schema({
  content : {
    typeof : String,
    required : true,
  }, 
  markedAsDone : {
    typeof: Boolean,
    default : false
  },
  createdBy : {
    type : mongoose.Schema.ObjectId,
    ref : "User",
  },
} , {timestamps:true})

export const SubTodo = mongoose.model("SubTodo" , subTodoSchema)