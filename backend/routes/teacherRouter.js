import express from "express";

import auth from "../middleware/auth.js";
import {
  addTeacher,
  deleteTeacher,
  getTeacher,
} from "../controllers/teacher.js";

export const teacherRouter = express.Router();

teacherRouter.post("/add_teacher", auth, addTeacher);
teacherRouter.get("/get_teacher", getTeacher);
teacherRouter.delete("/delete_teacher", auth, deleteTeacher);
