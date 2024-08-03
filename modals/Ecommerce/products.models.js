import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  name: {
    typeof: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref : "Category",
  },
  description: {
    typeof: String,
    required : true
  },
  productImage: {
    typeof: String,
    required: true
  },
  price: {
    typeof: Number,
    required : true
  },
  stock: {
    typeof: Number,
    default: 0
  },
} , {timestamps : true})

export const Product = mongoose.model('Product' , productSchema)