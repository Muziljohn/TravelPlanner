import express from "express";
import cookieParser from "cookie-parser";
import connectDb from "./config/dbConfig.js";
import userRoute from "./routes/userRoute.js";
import contactRoute from "./routes/contactRoute.js";
import adminRoute from "./routes/adminRoute.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(cookieParser());
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/contactUs", contactRoute);
app.use("/api/admin", adminRoute);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

connectDb();
