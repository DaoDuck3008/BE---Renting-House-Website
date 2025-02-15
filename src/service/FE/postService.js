import db from "../../models/index";
import { Op } from "sequelize";
import Sequelize from "sequelize";
const costTrans = (cost) => {
  switch (cost) {
    case "Dưới 1 triệu":
      return { [Op.lte]: 1000000 };
    case "1 - 3 triệu":
      return { [Op.and]: [{ [Op.gt]: 1000000 }, { [Op.lte]: 3000000 }] };
    case "3 - 5 triệu":
      return { [Op.and]: [{ [Op.gt]: 3000000 }, { [Op.lte]: 5000000 }] };
    case "5 - 8 triệu":
      return { [Op.and]: [{ [Op.gt]: 5000000 }, { [Op.lte]: 8000000 }] };
    case "8 - 10 triệu":
      return { [Op.and]: [{ [Op.gt]: 8000000 }, { [Op.lte]: 10000000 }] };
    case "Trên 10 triệu":
      return { [Op.gte]: 10000000 };
    case "":
      return { [Op.gte]: 0 };
  }
};

const areaTrans = (area) => {
  switch (area) {
    case "Dưới 30m2":
      return { [Op.lte]: 30 };
    case "30 - 50m2":
      return { [Op.and]: [{ [Op.gt]: 30 }, { [Op.lte]: 50 }] };
    case "50 - 80m2":
      return { [Op.and]: [{ [Op.gt]: 50 }, { [Op.lte]: 80 }] };
    case "80 - 100m2":
      return { [Op.and]: [{ [Op.gt]: 80 }, { [Op.lte]: 100 }] };
    case "Trên 100m2":
      return { [Op.gte]: 100 };
    case "":
      return { [Op.gt]: 0 };
  }
};

const ratingCreateTrans = (rating) => {
  switch (rating) {
    case "Thấp đến cao":
      return ["average_rate", "ASC"];
    case "":
      return ["average_rate", "DESC"];
  }
};

const inputTrans = (input) => {
  const _input = input.toLowerCase();
  // console.log(">>> check _input:", _input);
  if (!input) {
    // Nếu district_id là rỗng, trả về điều kiện không làm gì
    return { [Op.not]: { house_id: 0 } };
  }
  return {
    [Op.or]: [
      Sequelize.literal(`LOWER(house_name) LIKE '%${_input}%'`),
      Sequelize.literal(`LOWER(address) LIKE '%${_input}%'`),
      Sequelize.literal(`LOWER(description) LIKE '%${_input}%'`),
    ],
  };
};

const fetchDistricts = async (city) => {
  try {
    console.log(">>> check city: ", city);
    const districts = await db.District.findAll({
      attributes: ["district_name", "city_name"],
      where: {
        city_name: city,
      },
    });

    if (!districts?.length) {
      return {
        EM: `There is no data districts with this ${city} city.`,
        EC: 0,
        DT: "",
      };
    }

    const _districts = districts.map((district) =>
      district.get({ plain: true })
    );
    console.log(">>> check districts: ", _districts);

    return {
      EM: "Call districts success",
      EC: 0,
      DT: _districts,
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

const fetchAllPost = async (query) => {
  try {
    const { searchText, city, district, price, area, time, rating } = query;
    // console.log(">>> check price: ", price);
    // console.log(">>> check area: ", area);
    const _cost = price ? price : "";
    const _area = area ? area : "";
    const _rating = rating ? rating : "";
    const _searchText = searchText ? searchText : "";
    const _district = district ? district : "";

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
        {
          model: db.Utilities,
          as: "Utilities",
        },
      ],
      where: {
        [Op.and]: [
          { cost: costTrans(_cost) },
          { area: areaTrans(_area) },
          inputTrans(_searchText),
          inputTrans(_district),
        ],
      },
      order: [ratingCreateTrans(_rating)],
    });

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

const uploadAPost = async (postData) => {
  try {
    const {
      address,
      kind,
      cost,
      area,
      utilities,
      host_name,
      phone,
      email,
      house_name,
      description,
      images,
    } = postData;

    // Kiểm tra dữ liệu đầu vào
    if (!host_name) {
      return { EM: "Host name is required.", EC: -1, DT: "" };
    }
    if (!Array.isArray(images) || images.length === 0) {
      return { EM: "At least one image is required.", EC: -1, DT: "" };
    }
    if (!utilities) {
      return { EM: "Utilities data is required.", EC: -1, DT: "" };
    }

    // Tìm host
    const user = await db.Host.findOne({
      attributes: ["id"],
      where: { host_name },
    });

    if (!user) {
      return { EM: "Host not found.", EC: -1, DT: "" };
    }
    console.log(">>> check user: ", user.get({ plain: true }));

    const host_id = user.id;

    // Tạo House
    const house = await db.House.create({
      house_name,
      address,
      image: images[0],
      area,
      cost,
      description,
      owner_id: host_id,
    });

    const house_id = house.house_id;

    // Tạo Utilities
    await db.Utilities.create({
      house_id,
      bedrooms: utilities.numberBedroom,
      floors: utilities.numberFloor,
      bathrooms: utilities.numberBathroom,
      security: utilities.security,
      fire_protection: utilities.pccc,
      parking: utilities.parking,
      camera: utilities.camera,
    });

    // Tạo Image bằng Promise.all()
    const imgs = await Promise.all(
      images.map(async (img) => {
        let createdImg = await db.Image.create({ house_id, images: img });
        return createdImg.get({ plain: true });
      })
    );

    return {
      EM: "Create new post success!!!",
      EC: 0,
      DT: { house, utilities, images: imgs },
    };
  } catch (e) {
    console.error(">>> catch error in service:", e);
    return {
      EM: "Something went wrong in service.",
      EC: -2,
      DT: "",
    };
  }
};

module.exports = {
  fetchAllPost,
  uploadAPost,
  fetchDistricts,
};
