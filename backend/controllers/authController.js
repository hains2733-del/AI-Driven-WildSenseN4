const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    // Mã hóa mật khẩu
    const hash = await bcrypt.hash(req.body.password, 10);

    // Tạo user mới
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    await user.save();

    res.status(201).json({
      message: "Đăng ký thành công",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
