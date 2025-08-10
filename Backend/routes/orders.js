const express = require("express");
const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const router = express.Router();

// ✅ Create new order
router.post("/create", async (req, res) => {
  try {
    const { userId, items, shippingAddress, billingAddress, paymentMethod } = req.body;

    if (!userId || !items || !shippingAddress || !billingAddress) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Calculate totals
    let subtotal = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ message: `Product ${item.productId} not found` });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for ${product.name}` });
      }

      const itemTotal = product.price * item.quantity;
      subtotal += itemTotal;

      orderItems.push({
        product: item.productId,
        quantity: item.quantity,
        price: product.price,
        total: itemTotal
      });

      // Update product stock
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity }
      });
    }

    const tax = subtotal * 0.18; // 18% GST
    const shipping = subtotal > 10000 ? 0 : 500; // Free shipping above 10k
    const total = subtotal + tax + shipping;

    const order = new Order({
      user: userId,
      items: orderItems,
      subtotal,
      tax,
      shipping,
      total,
      paymentMethod,
      shippingAddress,
      billingAddress
    });

    await order.save();

    res.status(201).json({
      message: "Order created successfully!",
      order
    });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get all orders (Admin)
router.get("/admin", async (req, res) => {
  try {
    const { 
      status, 
      paymentStatus, 
      search, 
      startDate, 
      endDate,
      page = 1,
      limit = 20
    } = req.query;

    const filter = {};
    
    if (status) filter.status = status;
    if (paymentStatus) filter.paymentStatus = paymentStatus;
    
    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) filter.createdAt.$gte = new Date(startDate);
      if (endDate) filter.createdAt.$lte = new Date(endDate);
    }

    if (search) {
      filter.$or = [
        { orderNumber: { $regex: search, $options: 'i' } },
        { 'shippingAddress.name': { $regex: search, $options: 'i' } },
        { 'shippingAddress.phone': { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const orders = await Order.find(filter)
      .populate('user', 'name phone')
      .populate('items.product', 'name mainImage brand')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Order.countDocuments(filter);

    res.status(200).json({
      orders,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalOrders: total
      }
    });
  } catch (error) {
    console.error("Fetch orders error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get user orders
router.get("/user/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId })
      .populate('items.product', 'name mainImage brand')
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Fetch user orders error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get order by ID
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name phone email')
      .populate('items.product', 'name mainImage brand description');

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Fetch order error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Update order status (Admin)
router.put("/:id/status", async (req, res) => {
  try {
    const { status, adminNotes } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { 
        status,
        adminNotes: adminNotes || order.adminNotes
      },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Order status updated successfully!",
      order
    });
  } catch (error) {
    console.error("Update order status error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Update payment status (Admin)
router.put("/:id/payment", async (req, res) => {
  try {
    const { paymentStatus } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { paymentStatus },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Payment status updated successfully!",
      order
    });
  } catch (error) {
    console.error("Update payment status error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Assign delivery agent (Admin)
router.put("/:id/delivery", async (req, res) => {
  try {
    const { deliveryAgent, trackingNumber, estimatedDelivery } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { 
        deliveryAgent,
        trackingNumber,
        estimatedDelivery: estimatedDelivery ? new Date(estimatedDelivery) : null
      },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Delivery details updated successfully!",
      order
    });
  } catch (error) {
    console.error("Update delivery details error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Cancel order
router.put("/:id/cancel", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.status === 'Delivered' || order.status === 'Shipped') {
      return res.status(400).json({ message: "Cannot cancel shipped or delivered order" });
    }

    // Restore product stock
    for (const item of order.items) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: item.quantity }
      });
    }

    order.status = 'Cancelled';
    await order.save();

    res.status(200).json({
      message: "Order cancelled successfully!",
      order
    });
  } catch (error) {
    console.error("Cancel order error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get order statistics (Admin)
router.get("/stats/admin", async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const pendingOrders = await Order.countDocuments({ status: 'Pending' });
    const processingOrders = await Order.countDocuments({ status: 'Processing' });
    const deliveredOrders = await Order.countDocuments({ status: 'Delivered' });
    
    const totalRevenue = await Order.aggregate([
      { $match: { status: { $in: ['Delivered', 'Shipped'] } } },
      { $group: { _id: null, total: { $sum: '$total' } } }
    ]);

    const monthlyRevenue = await Order.aggregate([
      { 
        $match: { 
          status: { $in: ['Delivered', 'Shipped'] },
          createdAt: { $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) }
        } 
      },
      { $group: { _id: null, total: { $sum: '$total' } } }
    ]);

    res.status(200).json({
      totalOrders,
      pendingOrders,
      processingOrders,
      deliveredOrders,
      totalRevenue: totalRevenue[0]?.total || 0,
      monthlyRevenue: monthlyRevenue[0]?.total || 0
    });
  } catch (error) {
    console.error("Get order stats error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router; 