import db from "../../models/index";
import { Op } from "sequelize";

const fetchAllPost = async () => {
  try {
    const posts = await db.House.findAll({
      attributes: [
        "house_id",
        "house_name",
        "address",
        "area",
        "cost",
        "average_rate",
        "description",
        "image",
      ],
      include: [
        {
          model: db.Image,
          as: "images",
        },
      ],
    });

    // console.log(">>> Check all posts: ", posts);

    return {
      EM: "get all posts success!",
      EC: 0,
      DT: posts,
    };
  } catch (e) {
    console.log(">>> catch error in service: ", e);
    return {
      EM: "Something went wrong in service.",
      EC: -2,
      DT: "",
    };
  }
};

module.exports = {
  fetchAllPost,
};
