const User = require("../models/users.models.js");

exports.findAllUser = async (req, res) => {
  try {
    let allUsers = await User.find()
      
    return res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findUserById = async (req, res) => {
  try {
    let UserData = await User.findById(req.params.id);
    return res.status(200).json(UserData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
