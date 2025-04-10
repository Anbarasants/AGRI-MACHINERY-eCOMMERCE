import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaBars,
  FaSearch,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <div className="bg-white p-3 border-b shadow-sm flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="./src/assets/logo.jpg" alt="Company Logo" className="h-20" />
        <div>
          <h2 className="font-bold">Arul Jayam Agri Machinery</h2>
          <p className="text-sm text-gray-600 flex items-center">
            <FaMapMarkerAlt className="mr-1 text-green-600 h-[10px]" /> Thirumalai Nagar, Kallakurichi Main Road, Mayilambarai Sankarapuram, Viluppuram, Tamil Nadu 606401
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <FaCheckCircle className="mr-1 text-green-600" /> GST No.:{" "}
            <span className="font-bold">24AASFM1611K1Z8</span>
          </p>
        </div>
      </div>
      <div className="hidden md:flex space-x-4 items-center">
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <FaEnvelope /> <span>Send Email</span>
        </button>
        <div className="border p-2 rounded-lg flex items-center space-x-2">
          <FaPhone className="text-green-700" />
          <span className="text-sm font-semibold">Call 08048265622</span>
        </div>
      </div>
    </div>
  );
};

const MainNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authMenuOpen, setAuthMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaBars
            className="md:hidden cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
          <span className="font-bold text-lg">Arul Jayam Agri Machinery</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-400">
            Company Brief
          </a>
          <a href="#" className="hover:text-yellow-400">
            Contact Us
          </a>
        </div>

        <div className="flex items-center space-x-4 relative">
          <div className="hidden md:flex items-center space-x-2 bg-gray-800 p-2 rounded-lg w-1/3">
            <input
              type="text"
              placeholder="Search Products/Services"
              className="bg-transparent focus:outline-none text-sm w-full"
            />
            <FaSearch className="text-yellow-400" />
          </div>
          <div className="relative">
          <button
          className="hidden md:flex bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg flex items-center space-x-2 "
          onClick={() => (window.location.href = "/login")}
          >
           <FaUser /> <span>Login/Signup</span>
          </button>

          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 flex flex-col space-y-3">
          <a href="#" className="hover:text-yellow-400">
            Our Product Range
          </a>
          <a href="#" className="hover:text-yellow-400">
            Company Brief
          </a>
          <a href="#" className="hover:text-yellow-400">
            Contact Us
          </a>
          <div className="flex items-center bg-gray-700 p-2 rounded-lg">
            <input
              type="text"
              placeholder="Search Products/Services"
              className="bg-transparent focus:outline-none text-sm w-full"
            />
            <FaSearch className="text-yellow-400" />
          </div>
          <button
            className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg flex items-center space-x-2"
            onClick={() => (window.location.href = "/login")}>
            <FaUser /> <span>Login</span>
          </button>
        </div>
      )}
    </nav>
  );
};

const Navbar = () => {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
    </>
  );
};

export default Navbar;
