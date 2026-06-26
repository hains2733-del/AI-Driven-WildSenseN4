// backend/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Vui lòng nhập tên"],
    },
    email: {
      type: String,
      required: [true, "Vui lòng nhập email"],
      unique: true, // Không được trùng lặp email
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Vui lòng nhập mật khẩu"],
    },
  },
  { timestamps: true } // Tự động thêm thời gian tạo (createdAt) và cập nhật (updatedAt)
);

module.exports = mongoose.model("User", userSchema);