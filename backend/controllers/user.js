import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
        success: false,
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "User Login successfully",
      success: true,
      token,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user);

    if (user) {
      return res.status(200).json({
        message: "current User",
        success: true,
        user,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
