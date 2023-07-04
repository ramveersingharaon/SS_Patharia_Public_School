import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  avatar: {
    public_id: String,
    url: String,
  },
});

export const Review = mongoose.model("Review", reviewSchema);
