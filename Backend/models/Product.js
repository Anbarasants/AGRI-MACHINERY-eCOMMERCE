const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  brand: String,
  price: Number,
  stock: Number,
  imageUrl: String,
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
