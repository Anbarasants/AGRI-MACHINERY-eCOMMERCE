import React, { useState } from "react";

const ServiceRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    machinery: "",
    serviceType: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service Request Submitted:", formData);
    alert("Your service request has been submitted!");
    setFormData({ name: "", phone: "", email: "", machinery: "", serviceType: "", message: "" });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Request Service</h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Machinery Type</label>
          <select
            name="machinery"
            value={formData.machinery}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Select Machinery</option>
            <option value="Tractor">Tractor</option>
            <option value="Harvester">Harvester</option>
            <option value="Plough">Plough</option>
            <option value="Sprayer">Sprayer</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Service Type</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Select Service Type</option>
            <option value="Repair">Repair</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Installation">Installation</option>
            <option value="Calibration">Calibration</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Additional Details</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default ServiceRequest;
