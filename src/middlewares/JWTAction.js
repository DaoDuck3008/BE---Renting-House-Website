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

module.exports = {
  createToken,
};
