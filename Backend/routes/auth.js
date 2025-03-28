const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// =======================
// User Signup Route
// =======================
router.post('/signup', async (req, res) => {
  const { name, phone, password } = req.body;

  if (!name || !phone || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ error: 'Phone number already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      phone,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({ error: 'Something went wrong during signup' });
  }
});

// =======================
// User Login Route
// =======================
router.post('/login', async (req, res) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(400).json({ error: 'Invalid phone or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid phone or password' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
      },
    });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ error: 'Something went wrong during login' });
  }
});

module.exports = router;
