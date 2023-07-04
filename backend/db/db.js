import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("database is connected");
    })
    .catch((e) => {
      console.log("database is not connected" + e);
    });
};
