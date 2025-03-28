<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/Auth");
=======
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
>>>>>>> 2824b4670cf953f582b21e4fd4b16ddd0f9a91b4

dotenv.config();
const app = express();
app.use(express.json());

<<<<<<< HEAD
// Routes
app.use("/api/users", authRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.log(err));
>>>>>>> 2824b4670cf953f582b21e4fd4b16ddd0f9a91b4
