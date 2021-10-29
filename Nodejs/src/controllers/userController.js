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

module.exports = {
  handleLogin: handleLogin,
  handleGetAllUser: handleGetAllUser,
};
