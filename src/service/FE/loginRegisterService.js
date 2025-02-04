import db from "../../models/index";
import { Op } from "sequelize";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

const checkUSernameExist = async (username) => {
  const user = await db.Host.findOne({
    attributes: ["host_name"],
    where: { host_name: username },
  });
  if (user) {
    return true;
  }
  return false;
};

const checkEmailExist = async (userEmail) => {
  const user = await db.Host.findOne({
    attributes: ["host_name"],
    where: { email: userEmail },
  });
  if (user) {
    return true;
  }
  return false;
};

const checkPhoneExist = async (userPhone) => {
  const user = await db.Host.findOne({
    attributes: ["host_name"],
    where: { phone: userPhone },
  });
  if (user) {
    return true;
  }
  return false;
};

const hashUserPassword = (userPassword) => {
  const hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createAnUser = async (userData) => {
  const { username, email, phone, gender, password } = userData;

  try {
    //VALIDATE
    //check Username exist
    const usernameExist = await checkUSernameExist(username);
    if (usernameExist) {
      return {
        EM: "Someone has used this username.",
        EC: -1,
        DT: "",
      };
    }
    //check Email exist
    const emailExist = await checkEmailExist(email);
    if (emailExist) {
      return {
        EM: "This email address has already exist.",
        EC: -1,
        DT: "",
      };
    }
    //check Phone number exist
    const phoneExist = await checkPhoneExist(phone);
    if (phoneExist) {
      return {
        EM: "This phone number has already exist.",
        EC: -1,
        DT: "",
      };
    }
    // hash password
    const hashPassword = hashUserPassword(password);

    //create user
    await db.Host.create({
      host_name: username,
      email: email,
      phone: phone,
      gender: gender,
      password: hashPassword,
    });

    return {
      EM: "A new user has created successfully!",
      EC: "0",
      DT: { username, gender },
    };
  } catch (e) {
    console.log(">>> catch error: ", e);
    return {
      EM: "Something went wrong in service.",
      EC: -2,
      DT: "",
    };
  }
};

module.exports = {
  createAnUser,
};
