import db from "../../models/index";
import { Op } from "sequelize";

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
    default:
      return undefined; // Bỏ qua điều kiện nếu không có giá trị
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
    default:
      return undefined; // Bỏ qua điều kiện nếu không có giá trị
  }
};

const ratingCreateTrans = (rating) => {
  switch (rating) {
    case "Thấp đến cao":
      return [["average_rate", "ASC"]];
    case "Cao đến thấp":
      return [["average_rate", "DESC"]];
    default:
      return [];
  }
};

const timeTrans = (time) => {
  if (time === "Cũ nhất") {
    return [["house_id", "ASC"]];
  } else {
    return [["house_id", "DESC"]];
  }
};

const inputTrans = (input) => {
  if (!input) {
    return undefined; // Bỏ qua điều kiện nếu không có giá trị
  }
  const _input = `%${input.toLowerCase()}%`;
  return {
    [Op.or]: [
      { house_name: { [Op.like]: _input } },
      { address: { [Op.like]: _input } },
      { description: { [Op.like]: _input } },
    ],
  };
};

const houseIdsTrans = (houseIds) => {
  if (!houseIds || houseIds.length === 0) {
    return undefined;
  }
  return { [Op.in]: houseIds };
};

const fetchDistricts = async (city) => {
  try {
    // console.log(">>> check city: ", city);
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
    const { searchtext, city, district, price, area, time, rating } = query;
    // console.log(">>> check price: ", price);
    // console.log(">>> check area: ", area);
    const _cost = price ? price : "";
    const _area = area ? area : "";
    const _rating = rating ? rating : "";
    const _time = time ? time : "";
    const _searchText = searchtext ? searchtext : "";
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
          ...(costTrans(_cost) ? [{ cost: costTrans(_cost) }] : []),
          ...(areaTrans(_area) ? [{ area: areaTrans(_area) }] : []),
          ...(inputTrans(_searchText) ? [inputTrans(_searchText)] : []),
          ...(inputTrans(_district) ? [inputTrans(_district)] : []),
        ],
      },
      order: [...ratingCreateTrans(_rating), ...timeTrans(_time)],
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

const fetchAllPostWithPagination = async (query, page, limit) => {
  try {
    let offset = (page - 1) * limit;

    const { searchText, city, district, price, area, time, rating } = query;

    //Lấy các houseId đã được lọc theo bán kính từ Map
    const { houseids } = query;

    const _cost = price ? price : "";
    const _area = area ? area : "";
    const _rating = rating ? rating : "";
    const _time = time ? time : "";
    const _searchText = searchText ? searchText : "";
    const _district = district ? district : "";
    const _houseIds = houseids ? houseids.split(",").map(Number) : "";

    const { count, rows } = await db.House.findAndCountAll({
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
          ...(costTrans(_cost) ? [{ cost: costTrans(_cost) }] : []),
          ...(areaTrans(_area) ? [{ area: areaTrans(_area) }] : []),
          ...(inputTrans(_searchText) ? [inputTrans(_searchText)] : []),
          ...(inputTrans(_district) ? [inputTrans(_district)] : []),
          ...(houseIdsTrans(_houseIds)
            ? [{ house_id: houseIdsTrans(_houseIds) }]
            : []),
        ],
      },
      distinct: true,
      order: [...ratingCreateTrans(_rating), ...timeTrans(_time)],
      offset: offset,
      limit: limit,
    });

    let data = {
      totalRows: count,
      totalPages: Math.ceil(count / limit),
      posts: rows,
    };

    console.log(">>> check data: ", data);

    return {
      EM: "get all posts success!",
      EC: 0,
      DT: data,
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

const fetchPostByUserId = async (userId, page, limit) => {
  try {
    let offset = (page - 1) * limit;

    const { count, rows } = await db.House.findAndCountAll({
      attributes: [
        "house_id",
        "house_name",
        "address",
        "number_of_room",
        "image",
        "area",
        "cost",
        "average_rate",
        "description",
        "owner_id",
      ],
      include: [
        {
          model: db.Comment,
          as: "comments",
        },
        {
          model: db.Image,
          as: "images",
          attributes: ["id", "images"],
        },
        {
          model: db.Utilities,
          as: "Utilities", // Thêm tiện ích vào kết quả trả về
          attributes: [
            "bedrooms",
            "floors",
            "bathrooms",
            "security",
            "fire_protection",
            "parking",
            "camera",
          ],
        },
      ],
      where: {
        owner_id: userId,
      },
      distinct: true,
      offset: offset,
      limit: limit,
    });

    if (!rows || !count) {
      return {
        EM: "There is no data here!",
        EC: -1,
        DT: "",
      };
    }

    let data = {
      totalRows: count,
      totalPages: Math.ceil(count / limit),
      posts: rows,
    };

    console.log(">>> check data: ", data);

    return {
      EM: "Get house success",
      EC: 0,
      DT: data,
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
    // console.log(">>> check user: ", user.get({ plain: true }));

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

const fetchAllPostWithoutPagination = async (query) => {
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
      attributes: ["house_id", "house_name", "address", "image"],
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
          ...(costTrans(_cost) ? [{ cost: costTrans(_cost) }] : []),
          ...(areaTrans(_area) ? [{ area: areaTrans(_area) }] : []),
          ...(inputTrans(_searchText) ? [inputTrans(_searchText)] : []),
          ...(inputTrans(_district) ? [inputTrans(_district)] : []),
        ],
      },
      distinct: true,
      order: ratingCreateTrans(_rating),
    });

    if (!posts?.length) {
      return {
        EM: "Not found any post",
        EC: -1,
        DT: "",
      };
    }

    return {
      EM: "Get all posts success.",
      EC: 0,
      DT: posts,
    };
  } catch (e) {
    console.log(">>>Check error in postService: ", e);
    return {
      EM: "Something went wrong in service.",
      EC: -2,
      DT: "",
    };
  }
};

const updatePost = async (query) => {
  try {
    const {
      house_id,
      house_name,
      address,
      cost,
      area,
      description,
      Utilities,
    } = query;

    const bodyUpdate = {
      house_name,
      address,
      cost,
      area,
      description,
    };

    const house = await db.House.findByPk(house_id);
    if (!house) {
      return { EM: "Not found any house like that.", EC: -1, DT: "" };
    }

    await house.update(bodyUpdate);

    if (Utilities && typeof Utilities === "object") {
      const updatedUtilities = {
        bedrooms: parseInt(Utilities.bedrooms, 10) || 0,
        floors: parseInt(Utilities.floors, 10) || 1,
        bathrooms: parseInt(Utilities.bathrooms, 10) || 1,
        security: Utilities.security,
        fire_protection: Utilities.fire_protection,
        parking: Utilities.parking,
        camera: Utilities.camera,
      };

      // Kiểm tra xem đã có record Utilities cho house chưa
      let utilRecord = await db.Utilities.findOne({
        where: { house_id: house_id },
      });
      if (utilRecord) {
        // Cập nhật record tiện ích hiện có
        await utilRecord.update(updatedUtilities);
      } else {
        // Nếu chưa có, tạo mới record tiện ích
        await Utilities.create({
          house_id: house_id,
          ...updatedUtilities,
        });
      }
    }

    return {
      EM: "House updated successfully",
      EC: 0,
      DT: "",
    };
  } catch (e) {
    console.log(">>>Check error in postService: ", e);
    return {
      EM: "Something went wrong in service.",
      EC: -2,
      DT: "",
    };
  }
};

const deletePost = async (params) => {
  try {
    const { id } = params;
    const house = await db.House.findByPk(id);

    if (!house) {
      return res.status(404).json({
        EM: "House not found",
        EC: -2,
        DT: "",
      });
    }

    await db.Utilities.destroy({ where: { house_id: id } });
    await db.Image.destroy({ where: { house_id: id } });
    await db.Comment.destroy({ where: { house_id: id } });
    await house.destroy();
    return {
      EM: "House deleted successfully",
      EC: 0,
      DT: "",
    };
  } catch (e) {
    console.log(">>>Check error in postService: ", e);
    return {
      EM: "Something went wrong in service.",
      EC: -2,
      DT: "",
    };
  }
};

const fetchAPost = async (house_id) => {
  try {
    const house = await db.House.findByPk(house_id, {
      attributes: [
        "house_id",
        "house_name",
        "address",
        "number_of_room",
        "image",
        "area",
        "cost",
        "average_rate",
        "description",
        "owner_id",
      ],
      include: [
        {
          model: db.Comment,
          as: "comments",
        },
        {
          model: db.Image,
          as: "images",
          attributes: ["id", "images"],
        },
        {
          model: db.Utilities,
          as: "Utilities", // Thêm tiện ích vào kết quả trả về
          attributes: [
            "bedrooms",
            "floors",
            "bathrooms",
            "security",
            "fire_protection",
            "parking",
            "camera",
          ],
        },
        {
          model: db.Host,
          as: "Host",
          attributes: ["host_name", "phone"],
        },
      ],
    });

    if (!house) {
      return {
        EM: "Not found house match with this house_id",
        EC: -1,
        DT: "",
      };
    }

    return {
      EM: "fetch a post success.",
      EC: 0,
      DT: house,
    };
  } catch (error) {
    console.log(">>>Check error in postService: ", error);
    return {
      EM: "Something went wrong in service.",
      EC: -2,
      DT: "",
    };
  }
};

module.exports = {
  fetchAllPost,
  fetchPostByUserId,
  uploadAPost,
  updatePost,
  deletePost,
  fetchAPost,
  fetchDistricts,
  fetchAllPostWithPagination,
  fetchAllPostWithoutPagination,
};
