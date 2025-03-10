import postService from "../../service/FE/postService";

const fetchDistricts = async (req, res) => {
  // console.log(">>> check data: ", req.query);
  try {
    const { city } = req.query;
    let data = await postService.fetchDistricts(city);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (e) {
    console.log(">>> catch error from postController: ", e);
    return res.status(500).json({
      EM: "error from server",
      EC: "-2",
      DT: "",
    });
  }
};

const fetchAllPost = async (req, res) => {
  try {
    console.log(">>> check query: ", req.query);
    if (req.query.page && req.query.limit) {
      const page = req.query.page;
      const limit = req.query.limit;
      console.log(">>> check page: ", page);
      console.log(">>> check limit: ", limit);

      let data = await postService.fetchAllPostWithPagination(
        req.query,
        +page,
        +limit
      );
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      console.log(">>> run this!!!");
      let data = await postService.fetchAllPost(req.query);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (e) {
    console.log(">>> catch error from postController: ", e);
    return res.status(500).json({
      EM: "error from server",
      EC: "-2",
      DT: "",
    });
  }
};

const fetchPostByUserId = async (req, res) => {
  try {
    console.log(">>>check query: ", req.query);
    if (req.query.page && req.query.limit) {
      let data = await postService.fetchPostByUserId(
        req.query.userid,
        +req.query.page,
        +req.query.limit
      );

      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      console.log("Missing page and limit query");
      return res.status.status(404).json({
        EM: "Missing page and limit query",
        EC: -2,
        DT: "",
      });
    }
  } catch (error) {
    res.status(500).json({
      EM: "Error from server",
      EC: -2,
      DT: "",
    });
  }
};

const uploadAPost = async (req, res) => {
  try {
    console.log(">>> check req.body: ", req.body);

    let data = await postService.uploadAPost(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (e) {
    console.log(">>> catch error from postController: ", e);
    return res.status(500).json({
      EM: "error from server",
      EC: "-2",
      DT: "",
    });
  }
};

const fetchAllPostWithoutPagination = async (req, res) => {
  try {
    let data = await postService.fetchAllPostWithoutPagination(req.query);

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch {
    console.log(">>> catch error from postController: ", e);
    return res.status(500).json({
      EM: "error from server",
      EC: "-2",
      DT: "",
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const data = await postService.updatePost(req.body);

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(">>> check error in postController: ", error);
    return res.status(500).json({
      EM: "Something wrong from server",
      EC: -2,
      DT: "",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const data = await postService.deletePost(req.params);

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(">>> check error in postController: ", error);
    return res.status(500).json({
      EM: "Something wrong from server",
      EC: -2,
      DT: "",
    });
  }
};

const fetchAPost = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await postService.fetchAPost(id);

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(">>> check error in postController: ", error);
    return res.status(500).json({
      EM: "Something wrong from server",
      EC: -2,
      DT: "",
    });
  }
};

module.exports = {
  fetchAllPost,
  fetchPostByUserId,
  uploadAPost,
  fetchDistricts,
  fetchAllPostWithoutPagination,
  updatePost,
  deletePost,
  fetchAPost,
};
