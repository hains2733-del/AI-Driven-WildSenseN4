// backend/server.js
// 1. LUÔN LUÔN đặt dòng này ở trên cùng để đọc file .env
require("dotenv").config(); 

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// 2. Import các đường dẫn Routes
const authRoutes = require("./routes/authRoutes");
const parkRoutes = require("./routes/parkRoutes"); // Tích hợp thêm routes quản lý công viên của bạn

const app = express();

// 3. Cấu hình Middleware
app.use(cors());
app.use(express.json()); // Giúp server đọc được dữ liệu JSON từ Body gửi lên

// 4. Định nghĩa các Endpoint API
app.use("/api/auth", authRoutes);
app.use("/api/parks", parkRoutes); // Endpoint cho công viên: http://localhost:5000/api/parks

// 5. Kết nối tới cơ sở dữ liệu MongoDB
// (Lưu ý: Đoạn này lấy biến MONGO_URL từ file .env của bạn)
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch(err => {
        console.error("❌ MongoDB Connection Error:");
        console.error(err);
    });

// 6. Khởi chạy Server ở cổng 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server Is Running On Port ${PORT}...`);
});