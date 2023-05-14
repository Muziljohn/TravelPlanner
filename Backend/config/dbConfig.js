import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit;
  }
};

export default connectDb;
