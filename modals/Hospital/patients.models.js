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

const patientSchema = new mongoose.Schema({
  name: {
    typeof: String,
    required: true
  },
  diagnosedWith: {
    typeof: String,
    required : true
  },
  gender: {
    typeof: String,
    enum: ["M" , "F" , "O"]
  },
  address : {
    type: [addressSchema],
    required: true
  },
  age: {
    typeof: Number,
    required: true
  },
  BloodGroup : {
    typeof: String,
    required: true
  },
  hospitalAdmittedTo : {
    type: mongoose.Schema.ObjectId,
    ref: "Hospital"
  }
} , {timestamps: true})

export const Patient = mongoose.model("Patient" , patientSchema)