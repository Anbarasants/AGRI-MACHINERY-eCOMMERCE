const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load .env variables

const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors()); // Handles CORS errors in frontend/backend separation

// Routes
app.use("/api/users", authRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
