import mongoose from 'mongoose'

const orderItemsSchema = new mongoose.Schema({
  productId : {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
  quantity : {
    typeof: Number,
    required : true,
  },
});

const addressSchema = new mongoose.Schema({
  houseNo: {
    typeof: Number,
    required : true
  },
  colony: {
    typeof: String,
    required: true
  },
  city: {
    typeof: String,
    required: true
  },
  state: {
    typeof: String,
    required: true
  },
  pincode: {
    typeof: Number,
    required: true
  },
})

const orderSchema = new mongoose.Schema({
  orderPrice: {
    typeof : Number,
    required : true
  },
  customer : {
    type: mongoose.Schema.ObjectId,
    ref : "User",
  },
  orderItems: {
    type: [orderItemsSchema],
  },
  adress: {
    type: [addressSchema]
  },
  status: {
    typeof: String,
    enum: ["Pending", "Cancelled", "Delieverd"],
    default: "Pending"
  }
} , {timestamps : true});

export const Order = mongoose.model('Order' , orderSchema)