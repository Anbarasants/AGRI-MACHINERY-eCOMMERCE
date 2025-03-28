const mongoose = require("mongoose");

<<<<<<< HEAD
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", UserSchema);
=======
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
>>>>>>> 2824b4670cf953f582b21e4fd4b16ddd0f9a91b4
