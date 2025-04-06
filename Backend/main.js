  const express = require("express");
  const mongoose = require("mongoose");
  const cors = require("cors");
  require("dotenv").config(); // Correct usage

  const authRoutes = require("./routes/auth");
  const productRoutes = require('./routes/productRoutes');

  const app = express();

  // Middlewares
  app.use(express.json());
  app.use(cors()); // Handles CORS errors in frontend/backend separation

  // Routes
  app.use("/api/users", authRoutes);
  app.use('/api/products', productRoutes);
  // MongoDB Connection
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
