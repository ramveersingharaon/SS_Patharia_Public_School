import express from "express";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import cors from "cors";
import { connectDatabase } from "./db/db.js";

import bodyParser from "body-parser";
import { userRouter } from "./routes/userRouter.js";
import { reviewRouter } from "./routes/reviewRouter.js";
import { teacherRouter } from "./routes/teacherRouter.js";
dotenv.config();

connectDatabase();
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use("/review", reviewRouter);
app.use("/user", userRouter);
app.use("/teacher", teacherRouter);

const port = 4000;

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.CLOUDINARY_API_KEY,
});

app.listen(port, () => {
  console.log(`The server is running port http://localhost:${port}`);
});
