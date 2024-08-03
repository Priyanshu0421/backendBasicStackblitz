import mongoose, { mongo } from "mongoose"

const medicalRecordSchema = new mongoose.Schema({
  pateintName: {
    type: mongoose.Schema.ObjectId,
    ref: "Patient",
  },
  DoctorName: {
    type : mongoose.Schema.ObjectId,
    ref: "Doctor",
  },
  noOfDaysAdmitted: {
    type: Number,
    required: true,
    default: 0,
  },
  treatmentPrice: {
    typeof : Nuumber,
    required: true,
    default: 0
  },
} , {timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord" , medicalRecordSchema)