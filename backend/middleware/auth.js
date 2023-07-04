import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({
      message: "invalid cridentials please login",
      success: false,
    });
  }
  try {
    const decode = jwt.verify(token, "mynameisramveer");

    req.user = decode._id;

    next();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export default auth;
