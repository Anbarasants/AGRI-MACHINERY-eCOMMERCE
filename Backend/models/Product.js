const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    shortDescription: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      required: true
    },
    mrp: {
      type: Number,
      required: true
    },
    discountedPrice: {
      type: Number,
      default: null
    },
    images: [{
      type: String,
      required: true
    }],
    mainImage: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
      enum: ['Tractors', 'Harvesters', 'Sprayers', 'Motors', 'Batteries', 'Accessories', 'Other']
    },
    subcategory: {
      type: String,
      default: ""
    },
    brand: {
      type: String,
      required: true
    },
    manufacturer: {
      type: String,
      default: ""
    },
    stock: {
      type: Number,
      default: 0
    },
    isAvailable: {
      type: Boolean,
      default: true
    },
    specifications: {
      type: Map,
      of: String,
      default: {}
    },
    features: [{
      type: String
    }],
    warranty: {
      type: String,
      default: "1 Year"
    },
    weight: {
      type: Number,
      default: 0
    },
    dimensions: {
      length: { type: Number, default: 0 },
      width: { type: Number, default: 0 },
      height: { type: Number, default: 0 }
    },
    sku: {
      type: String,
      unique: true,
      required: true
    },
    tags: [{
      type: String
    }],
    rating: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 }
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

// Generate SKU automatically
ProductSchema.pre('save', function(next) {
  if (!this.sku) {
    this.sku = 'PROD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  }
  next();
});

module.exports = mongoose.model("Product", ProductSchema);
