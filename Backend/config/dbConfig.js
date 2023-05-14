import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = mongoose.connect("mongodb+srv://syedSense:<syedSense>@muzilcluster.zjnu5ds.mongodb.net");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit;
  }
};

export default connectDb;
