import cloudinary from "cloudinary";
import Teacher from "../models/Teacher.js";

export const addTeacher = async (req, res) => {
  try {
    const { name, subject, avatar } = req.body;

    const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      folder: "school",
    });
    const teacher = new Teacher({
      name: name,
      subject: subject,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });
    await teacher.save();
    return res.status(200).send({
      success: true,
      teacher,
      message: "Teacher Add Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};
export const getTeacher = async (req, res) => {
  try {
    const teachers = await Teacher.find({});
    return res.status(200).send({
      success: true,
      teachers,
      message: "Teacher Get Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTeacher = async (req, res) => {
  const _id = req.headers._id;

  try {
    const findTeacher = await Teacher.findById(_id);

    await cloudinary.v2.uploader.destroy(findTeacher.avatar.public_id);

    const teacher = await Teacher.findByIdAndDelete(_id);

    return res.status(200).json({
      message: "Teacher Delete Successfully",
      teacher,
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
