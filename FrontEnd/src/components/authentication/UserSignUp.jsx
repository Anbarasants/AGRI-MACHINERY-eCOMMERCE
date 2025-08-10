import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserAuth = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Check for admin login
    if (isLogin && formData.phone == "0123456789" && formData.password === "Admin@123") {
      // Admin login
      localStorage.setItem("adminToken", "admin-logged-in");
      localStorage.setItem("userRole", "admin");
      localStorage.setItem("userData", JSON.stringify({
        name: "Admin",
        phone: "admin123@gmail.com",
        role: "admin"
      }));
      console.log("entered");
      navigate("/admin/dashboard");
      setIsLoading(false);
      return;
    }

    const url = isLogin
      ? "/api/users/login"
      : "/api/users/signup";

    try {
      const response = await axios.post(url, formData);
      
      if (response.data.success) {
        // Store user data
        localStorage.setItem("userToken", response.data.token || "user-logged-in");
        localStorage.setItem("userRole", "user");
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        
        navigate("/");
      }
      
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 px-4 pt-3 pb-4">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name for Sign Up */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                className="w-full px-3 py-2 border rounded-lg focus:ring-green-300 focus:border-green-500"
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          {/* Phone Number / Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {isLogin ? "Phone Number or Email" : "Phone Number"}
            </label>
            <input
              type={isLogin ? "text" : "tel"}
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              className="w-full px-3 py-2 border rounded-lg focus:ring-green-300 focus:border-green-500"
              placeholder={isLogin ? "Enter phone or email" : "Enter your phone number"}
              pattern={!isLogin ? "[0-9]{10}" : undefined}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="w-full px-3 py-2 border rounded-lg focus:ring-green-300 focus:border-green-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Loading..." : (isLogin ? "Login" : "Sign Up")}
          </button>
        </form>

        {/* Forgot Password / Signup Link */}
        <div className="mt-4 text-sm text-center">
          {isLogin ? (
            <>
              <Link to="/forgot-password" className="text-green-600 hover:underline">
                Forgot Password?
              </Link>
              <p className="mt-2">
                Don't have an account?{" "}
                <button
                  className="text-green-600 hover:underline"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </button>
              </p>
            </>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                className="text-green-600 hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAuth; 