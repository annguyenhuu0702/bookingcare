// import db from "./../models/index";
import userServices from "../services/userServices";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  // check email exits
  // compare password
  // return userInfo
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameter!",
    });
  }
  let userData = await userServices.handleUserLogin(email, password);
  res.status(200).json({
    errCode: userData.errCode,
    message: userData.message,
    user: userData.user ? userData.user : {},
  });
};

let handleGetAllUser = async (req, res) => {
  let id = req.query.id; //ALL id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing requierd parameter",
      users: [],
    });
  }
  let users = await userServices.getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "ok",
    users,
  });
};

let handleCreateNewUser = async (req, res) => {
  let message = await userServices.createNewUser(req.body);
  return res.status(200).json(message);
};

let handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(100).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  }
  let message = await userServices.deleteUser(req.body.id);
  return res.status(200).json(message);
};

let handleEditUser = async (req, res) => {
  let data = req.body;
  let message = await userServices.updateUserData(data);
  return res.status(200).json(message);
};

let getAllCode = async (req, res) => {
  try {
    let data = await userServices.getAllCodeService(req.query.type);
    console.log(data);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Get all code error: ", e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
module.exports = {
  handleLogin: handleLogin,
  handleGetAllUser: handleGetAllUser,
  handleCreateNewUser: handleCreateNewUser,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
  getAllCode: getAllCode,
};
