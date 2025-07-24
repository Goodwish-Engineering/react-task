const User = require("../Model/UserModel");


exports.signin = async (req, res) => {
  const { userName, password } = req.body;
  let user = await User.findOne({ userName: userName });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (password !== user.password) {
    return res.status(404).json({ message: "Password does not match" });
  }
  return res.status(200).json({ id: user.id, message: "Login Successful" });
};
