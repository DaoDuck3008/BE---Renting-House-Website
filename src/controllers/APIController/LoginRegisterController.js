import loginRegisterService from "../../service/FE/loginRegisterService";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
require("dotenv").config();

const SECRET_KEY = process.env.JWT_SECRET;

const register = async (req, res) => {
  console.log(">>> check req.body: ", req.body);
  try {
    if (!req.body) {
      return res.status(404).json({
        EM: "Missing data",
        EC: -2,
        Data: "",
      });
    }

    let data = await loginRegisterService.createAnUser(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (e) {
    console.log(">>> catch error from apiController: ", e);
    return res.status(500).json({
      EM: "error from server",
      EC: "-2",
      DT: "",
    });
  }
};

const login = async (req, res) => {
  console.log(">>> check req.body: ", req.body);
  try {
    if (!req.body) {
      return res.status(404).json({
        EM: "Missing data",
        EC: -2,
        Data: "",
      });
    }

    let data = await loginRegisterService.findAnUser(req.body);
    // Tạo JWT Token
    const user = data.DT;
    console.log(">>> check get user in controller: ", user);
    console.log("check secret key:", SECRET_KEY);

    //Tạo JWT Token
    const token = jwt.sign(
      {
        id: user.id,
        username: user.host_name,
        phone: user.phone,
        email: user.email,
        gender: user.gender,
      },
      SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    // Lưu vào HTTP-Only Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Để false khi chạy localhost, trên HTTPS thì set true
      maxAge: 60 * 60 * 1000, // Hết hạn sau 1 giờ
    });

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (e) {
    console.log(">>> catch error from apiController: ", e);
    return res.status(500).json({
      EM: "error from server",
      EC: "-2",
      DT: "",
    });
  }
};

const getUserInfo = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      EM: "You didn't login.",
      EC: -2,
      DT: "",
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return res.status(200).json({
      EM: "get user data success.",
      EC: 0,
      DT: decoded,
    });
  } catch (e) {
    console.log(">>> catch error from controller: ", e);
    return res.status(500).json({
      EM: "error from server",
      EC: "-2",
      DT: "",
    });
  }
};

const logOut = (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      EM: "Logout success.",
      EC: 0,
      DT: "",
    });
  } catch (e) {
    console.log(">>> catch error from controller: ", e);
    return res.status(500).json({
      EM: "error from server",
      EC: "-2",
      DT: "",
    });
  }
};

module.exports = {
  register,
  login,
  getUserInfo,
  logOut,
};
