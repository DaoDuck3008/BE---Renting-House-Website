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

const checkPasswordCorrect = async (password, hashpass) => {
  return await bcrypt.compare(password, hashpass);
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

//Login
const findAnUser = async (userInput) => {
  try {
    // find an user in Host table
    const user = await db.Host.findOne({
      attributes: ["id", "host_name", "email", "phone", "gender", "password"],
      where: {
        [Op.or]: [
          {
            email: userInput.emailPhone,
          },
          {
            phone: userInput.emailPhone,
          },
        ],
      },
    });

    // console.log(">>> check user: ", user);

    if (user) {
      if (await checkPasswordCorrect(userInput.password, user.password)) {
        console.log(">>> Login successfully!");
        const _user = user.get({ plain: true });

        return {
          EM: "Login successfully!", // error message
          EC: 0, // error code -1 -2
          DT: {
            id: _user.id,
            username: _user.host_name,
            email: _user.email,
            phone: _user.phone,
            gender: _user.gender,
          }, // data
        };
      }
    }

    console.log(
      `>>>Not found any email or phone: ${userInput.emailPhone} with password: ${userInput.password}`
    );

    return {
      EM: "Wrong email / phone number or password!",
      EC: -1,
      DT: "",
    };
  } catch (e) {
    console.log(">>> catch error from service: ", e);
    return {
      EM: "There are something wrongs in service.",
      EC: -2,
      DT: "",
    };
  }
};

const updateAnUser = async (userId, updateInput) => {
  try {
    // Cập nhật thông tin người dùng
    const [updatedRows] = await db.Host.update(
      {
        host_name: updateInput.username,
        email: updateInput.email,
        phone: updateInput.phone,
        gender: updateInput.gender,
      },
      { where: { id: userId } }
    );

    // Nếu không tìm thấy người dùng
    if (updatedRows === 0) {
      return { EM: "Not found user!", EC: -1, DT: "" };
    }

    // Lấy lại thông tin người dùng sau khi cập nhật
    const updatedUser = await db.Host.findOne({
      where: { id: userId },
      attributes: ["id", "host_name", "email", "phone", "gender"],
    });

    return {
      EM: "Update user success!",
      EC: 0,
      DT: {
        id: updatedUser.id,
        username: updatedUser.host_name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        gender: updatedUser.gender,
      },
    };
  } catch (e) {
    console.log(">>> catch error from service: ", e);
    return {
      EM: "There are something wrongs in service.",
      EC: -2,
      DT: "",
    };
  }
};

module.exports = {
  createAnUser,
  findAnUser,
  updateAnUser,
};
