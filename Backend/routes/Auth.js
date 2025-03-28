const express = require("express");
const User = require("../models/User");

const router = express.Router();

// User Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, phone } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ phone });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Create and save new user
    const newUser = new User({ name, phone });
    await newUser.save();

    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
