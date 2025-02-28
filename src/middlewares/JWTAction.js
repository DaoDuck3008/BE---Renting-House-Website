import jwt from "jsonwebtoken";

require("dotenv").config();

const SECRET_KEY = process.env.JWT_SECRET;

const createToken = (payload) => {
  try {
    const token = jwt.sign(
      {
        payload,
      },
      SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );
    return token;
  } catch (e) {
    console.log(">>> catch error from JWT action file:", e);
    return null;
  }
};

const authenticateUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({ EM: "Not found any token", EC: 0, DT: "" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.payload.id;
    next();
  } catch (error) {
    console.log(">>> Catch an error from JWT middleware: ", error);
    return res
      .status(403)
      .json({ EM: "Token is not authenticated.", EC: -2, DT: "" });
  }
};

module.exports = {
  createToken,
  authenticateUser,
};
