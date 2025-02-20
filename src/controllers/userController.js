import userService from "../service/userService";
import db from "../models";
const { Host } = db; 

const updateUserInfo = async (req, res) => {
  try {
    console.log(">>> updateUserInfo req.body:", req.body);

    const { userId, updateData } = req.body;

    // Tìm Host theo userId
    const host = await Host.findByPk(userId);
    if (!host) {
      return res.status(404).json({
        success: false,
        message: "Host not found",
      });
    }

    await host.update({
      host_name: updateData.username,
      email: updateData.email,
      phone: updateData.phone,
      gender: updateData.gender,
    });

    return res.status(200).json({
      success: true,
      message: "Host info updated successfully",
    });
  } catch (error) {
    console.error("Error updating host info:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  console.log(">>> check req.body: ", req.body);

  //kiểm tra xem đã tồn tại tài khoản này chưa

  const hostExist = await userService.checkHostExist(
    req.body.email,
    req.body.username,
    req.body.phone
  );

  console.log(">>> check host exist:", hostExist);

  if (hostExist.length > 0) {
    console.log(
      ">>>ERROR: Email, Phone number or Username is already exist!!!"
    );
    return res.render("register.ejs");
  }

  if (req.body.role === "client") {
    await userService.createClient(req.body);
  } else if (req.body.role === "host") {
    await userService.createHost(req.body);
  }

  console.log(">>>REGISTER SUCCESS!!!");
  return res.render("home.ejs");
};

const login = async (req, res) => {
  // console.log(">>> check req.body: ", req.body);
  const user = await userService.checkLogin(
    req.body.emailPhone,
    req.body.password
  );
  console.log(">>> user: ", user);

  const _user = user.get({ plain: true });

  console.log(">>> check _user: ", _user);

  if (_user) {
    console.log(">>> Login success!!!");
    return res.render("home.ejs");
  } else {
    console.log(">>> Incorrect phone email or password");
    return res.render("login.ejs");
  }
};

module.exports = {
  createUser,
  login,
  updateUserInfo 
};
