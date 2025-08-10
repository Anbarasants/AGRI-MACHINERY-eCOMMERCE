import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // TODO: Connect to backend API
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number');
      setLoading(false);
      return;
    }
    if (!password) {
      setError('Please enter your password');
      setLoading(false);
      return;
    }
    // Mock login
    if (phone === '9999999999' && password === 'password') {
      navigate('/profile');
    } else {
      setError('Invalid phone or password');
    }
    if (phone === '1234567890' && password === 'password') {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid phone or password');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
              className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
              placeholder="Enter your 10-digit mobile number"
              pattern="[0-9]{10}"
              maxLength={10}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          <Link to="/forgot-password" className="text-green-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div className="mt-2 text-sm text-center">
          Don't have an account?{' '}
          <button
            className="text-green-600 hover:underline"
            onClick={() => navigate('/register')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login; 