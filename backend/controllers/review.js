import { Review } from "../models/Review.js";
import cloudinary from "cloudinary";
export const test = (req, res) => {
  res.send("hello world");
};

export const leaveReview = async (req, res) => {
  try {
    const { name, message, avatar } = req.body;
    const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      folder: "school",
    });
    const review = new Review({
      name: name,
      message: message,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });
    await review.save();

    return res.status(200).json({
      message: "Review send Successfully",
      review,
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const getReview = async (req, res) => {
  try {
    const reviews = await Review.find({});
    return res.status(200).json({
      message: "Review get Successfully",
      reviews,
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
export const deleteReview = async (req, res) => {
  const _id = req.headers._id;

  try {
    const findReview = await Review.findById(_id);

    // await cloudinary.v2.uploader.destroy(findReview.avatar.public_id);

    const reviews = await Review.findByIdAndDelete(_id);

    return res.status(200).json({
      message: "Review Delete Successfully",
      reviews,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
