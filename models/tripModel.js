import mongoose from "mongoose";

const tripSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cnic: {
    type: Number,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  date: {
    type: date,
    required: true,
  },
  cusomerNote: {
    type: String,
    required: true,
  },
});

export default mongoose.model("tripModel", tripSchema);
