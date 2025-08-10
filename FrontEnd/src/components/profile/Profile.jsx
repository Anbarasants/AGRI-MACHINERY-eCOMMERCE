import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockUser = {
  name: 'Test User',
  phone: '9999999999',
  email: 'testuser@example.com',
  addresses: [
    {
      id: 1,
      name: 'Test User',
      phone: '9999999999',
      address: '123 Main St',
      city: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600001',
      isDefault: true,
    },
  ],
};

const Profile = () => {
  const [user, setUser] = useState(mockUser);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ ...mockUser });
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleEdit = () => {
    setEditMode(true);
    setForm({ ...user });
    setError('');
    setSuccess('');
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...form });
    setEditMode(false);
    setSuccess('Profile updated successfully!');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      setError('All fields are required');
      return;
    }
    if (passwords.new.length < 6) {
      setError('New password must be at least 6 characters');
      return;
    }
    if (passwords.new !== passwords.confirm) {
      setError('Passwords do not match');
      return;
    }
    setSuccess('Password changed successfully!');
    setPasswords({ current: '', new: '', confirm: '' });
    setShowPasswordForm(false);
  };

  const handleLogout = () => {
    // Clear user session (mock)
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">My Profile</h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={editMode ? form.name : user.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                disabled={!editMode}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={editMode ? form.phone : user.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                disabled={!editMode}
                required
                maxLength={10}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={editMode ? form.email : user.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                disabled={!editMode}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Addresses</label>
            <ul className="space-y-2">
              {user.addresses.map(addr => (
                <li key={addr.id} className="bg-gray-50 p-3 rounded-lg border flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="font-semibold">{addr.name}</div>
                    <div className="text-sm text-gray-600">{addr.address}, {addr.city}, {addr.state} - {addr.pincode}</div>
                    <div className="text-xs text-gray-500">{addr.phone} {addr.isDefault && <span className="text-green-600 font-bold">(Default)</span>}</div>
                  </div>
                  {/* Add edit/delete buttons here in future */}
                </li>
              ))}
            </ul>
            {/* Add address button (future) */}
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}
          <div className="flex space-x-2 mt-4">
            {!editMode && (
              <button
                type="button"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
            {editMode && (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Save Changes
              </button>
            )}
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              onClick={() => setShowPasswordForm(v => !v)}
            >
              Change Password
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 ml-auto"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </form>
        {showPasswordForm && (
          <form onSubmit={handlePasswordChange} className="mt-6 space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Change Password</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                type="password"
                name="current"
                value={passwords.current}
                onChange={e => setPasswords({ ...passwords, current: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                name="new"
                value={passwords.new}
                onChange={e => setPasswords({ ...passwords, new: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input
                type="password"
                name="confirm"
                value={passwords.confirm}
                onChange={e => setPasswords({ ...passwords, confirm: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-green-300"
                required
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Save Password
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                onClick={() => setShowPasswordForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile; 