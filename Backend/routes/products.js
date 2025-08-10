const express = require("express");
const Product = require("../models/Product");
const { authMiddleware, requireRole } = require("../utils/authMiddleware");
const router = express.Router();

// ✅ Get all products (For users) - with search and filtering
router.get("/", async (req, res) => {
  try {
    const { 
      search, 
      category, 
      brand, 
      minPrice, 
      maxPrice, 
      sortBy = 'createdAt', 
      sortOrder = 'desc',
      page = 1,
      limit = 12,
      featured
    } = req.query;

    // Build filter object
    const filter = { isActive: true };
    
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { brand: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }
    
    if (category) filter.category = category;
    if (brand) filter.brand = brand;
    if (featured === 'true') filter.isFeatured = true;
    
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const products = await Product.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Product.countDocuments(filter);

    res.status(200).json({
      products,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalProducts: total,
        hasNext: skip + products.length < total,
        hasPrev: parseInt(page) > 1
      }
    });
  } catch (error) {
    console.error("Fetch products error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get product by ID (For ProductDetails)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    console.error("Fetch product by ID error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Create a new product (Admin only)
router.post("/create", authMiddleware, requireRole('admin'), async (req, res) => {
  try {
    const productData = req.body;
    
    // Validate required fields
    if (!productData.name || !productData.price || !productData.category || !productData.brand) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = new Product(productData);
    await product.save();
    
    res.status(201).json({ 
      message: "Product created successfully!",
      product 
    });
  } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Update product (Admin only)
router.put("/:id", authMiddleware, requireRole('admin'), async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.status(200).json({ 
      message: "Product updated successfully!",
      product 
    });
  } catch (error) {
    console.error("Update product error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Delete product (Admin only)
router.delete("/:id", authMiddleware, requireRole('admin'), async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    console.error("Delete product error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get product categories
router.get("/categories/list", async (req, res) => {
  try {
    const categories = await Product.distinct('category');
    res.status(200).json(categories);
  } catch (error) {
    console.error("Fetch categories error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get product brands
router.get("/brands/list", async (req, res) => {
  try {
    const brands = await Product.distinct('brand');
    res.status(200).json(brands);
  } catch (error) {
    console.error("Fetch brands error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get featured products
router.get("/featured/list", async (req, res) => {
  try {
    const featuredProducts = await Product.find({ 
      isFeatured: true, 
      isActive: true 
    }).limit(8);
    res.status(200).json(featuredProducts);
  } catch (error) {
    console.error("Fetch featured products error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Bulk update products (Admin only)
router.post("/bulk-update", authMiddleware, requireRole('admin'), async (req, res) => {
  try {
    const { products } = req.body;
    
    if (!Array.isArray(products)) {
      return res.status(400).json({ message: "Products must be an array" });
    }

    const updatePromises = products.map(product => 
      Product.findByIdAndUpdate(product._id, product, { new: true })
    );
    
    const updatedProducts = await Promise.all(updatePromises);
    
    res.status(200).json({ 
      message: "Products updated successfully!",
      products: updatedProducts 
    });
  } catch (error) {
    console.error("Bulk update products error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
