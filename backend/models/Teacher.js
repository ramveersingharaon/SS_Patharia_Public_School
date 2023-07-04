import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Teacher Name is Required"],
  },
  subject: {
    type: String,
    required: [true, "Teacher Subject is Required"],
  },
  avatar: {
    public_id: String,
    url: String,
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
