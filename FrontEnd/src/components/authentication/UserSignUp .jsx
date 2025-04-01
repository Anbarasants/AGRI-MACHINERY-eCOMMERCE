import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserAuth = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? "http://localhost:5000/api/users/login"
      : "http://localhost:5000/api/users/signup";

    try {
      const response = await axios.post(url, formData);
      alert(response.data.message);
      if (response.data.success) {
        navigate("/"); // Redirect after successful login/signup
      }
    } catch (error) {
      alert(error.response?.data?.message || "Error occurred");
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
                className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                placeholder="Enter your name"
                required={!isLogin}
              />
            </div>
          )}

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
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
              className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
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
