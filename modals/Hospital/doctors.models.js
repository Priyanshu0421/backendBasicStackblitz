import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
  name: {
    typeof: String,
    required: true
  },
  salary: {
    typeof: Number,
    required: true
  },
  qualification : {
    typeof: String,
    required: true
  },
  experienceInYears: {
    typeof: Number,
    required: true,
    default : 0
  },
  worksInHospital : [{
    type: mongoose.Schema.ObjectId,
    ref : "Hospital",
  }],
} , {timestamps: true})

export const Doctor = mongoose.model("Doctor" , doctorSchema)