import mongoose from "mongoose"

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

const hospitalchema = new mongoose.Schema({
  name: {
    typeof: String,
    required: true
  },
  address: {
    type : [addressSchema],
    required: true
  },
  specializedIn : {
    typeof:[String]
  },
  noOfStaff: {
    typeof: Number,
    required: true,
  },
} , {timestamps: true})

export const Hospital = mongoose.model("Hospital" , hospitalchema)