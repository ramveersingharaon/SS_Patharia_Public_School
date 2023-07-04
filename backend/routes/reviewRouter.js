import express from "express";
import {
  deleteReview,
  getReview,
  leaveReview,
  test,
} from "../controllers/review.js";
import auth from "../middleware/auth.js";

export const reviewRouter = express.Router();
reviewRouter.get("/", test);

reviewRouter.post("/leave_review", leaveReview);
reviewRouter.get("/get_review", getReview);
reviewRouter.delete("/delete_review", auth, deleteReview);
