import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },

  Message: {
    type: String,
    required: true,
  },
});

export default mongoose.model("contactModel", contactSchema);
