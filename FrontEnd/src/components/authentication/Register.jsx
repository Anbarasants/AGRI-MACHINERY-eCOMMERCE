import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Mock OTP
  const mockOtp = '123456';

  const handleSendOtp = (e) => {
    e.preventDefault();
    setError('');
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    setOtp(mockOtp);
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setError('');
    if (enteredOtp !== otp) {
      setError('Invalid OTP');
      return;
    }
    // Simulate account creation
    alert('Account created! You can now log in.');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Sign Up</h2>
        <form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
              className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
              placeholder="Enter your 10-digit mobile number"
              pattern="[0-9]{10}"
              maxLength={10}
              required
              disabled={otpSent}
            />
          </div>
          {otpSent && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
              <input
                type="text"
                name="otp"
                value={enteredOtp}
                onChange={e => setEnteredOtp(e.target.value.replace(/[^0-9]/g, ''))}
                className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                placeholder="Enter OTP (mock: 123456)"
                maxLength={6}
                required
              />
            </div>
          )}
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
            disabled={loading}
          >
            {otpSent ? 'Submit & Create Account' : 'Send OTP'}
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <button
            className="text-green-600 hover:underline"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register; 