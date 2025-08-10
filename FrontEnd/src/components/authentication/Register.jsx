import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Mock OTP for demo
  const mockOtp = "123456";

  const handleSendOtp = (e) => {
    e.preventDefault();
    setError("");

    // Basic validations
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Simulate sending OTP
    setOtp(mockOtp);
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setError("");

    if (enteredOtp !== otp) {
      setError("Invalid OTP");
      return;
    }

    // Simulate account creation
    alert("✅ Account created successfully! You can now log in.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Sign Up
        </h2>

        <form
          onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
          className="space-y-4"
        >
          {!otpSent && (
            <>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                  placeholder="10-digit mobile number"
                  maxLength={10}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                  placeholder="Enter password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                  placeholder="Re-enter password"
                  required
                />
              </div>
            </>
          )}

          {/* OTP Field */}
          {otpSent && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter OTP
              </label>
              <input
                type="text"
                value={enteredOtp}
                onChange={(e) =>
                  setEnteredOtp(e.target.value.replace(/[^0-9]/g, ""))
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                placeholder="Enter OTP (mock: 123456)"
                maxLength={6}
                required
              />
            </div>
          )}

          {/* Error Message */}
          {error && <div className="text-red-600 text-sm">{error}</div>}

          {/* Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
            disabled={loading}
          >
            {otpSent ? "Verify OTP & Create Account" : "Send OTP"}
          </button>
        </form>

        <div className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <button
            className="text-green-600 hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
