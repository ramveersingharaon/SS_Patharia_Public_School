import express from "express";
import { currentUser, login } from "../controllers/user.js";
import auth from "../middleware/auth.js";

export const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.get("/currentUser", auth, currentUser);
