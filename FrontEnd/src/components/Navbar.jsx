import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-green-700 p-4 fixed w-full top-0 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center relative">
                {/* Brand Name */}
                <Link to="/" className="text-white text-2xl font-bold tracking-wide">
                    ARUL JAYAM AGRI MACHINERY
                </Link>

                {/* Hamburger Menu for Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none md:hidden"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-white hover:text-yellow-300 transition">Home</Link>
                    <Link to="/about" className="text-white hover:text-yellow-300 transition">About</Link>
                    <Link to="/product" className="text-white hover:text-yellow-300 transition">Poducts</Link>
                    
                    {/* Products Dropdown */}
                    {/* <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="text-white hover:text-yellow-300 flex items-center transition"
                        >
                            Products <FaChevronDown className="ml-1" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute top-full mt-2 bg-white text-black shadow-lg rounded-lg w-48">
                                <Link to="/tractors" className="block px-4 py-2 hover:bg-gray-200">Tractors</Link>
                                <Link to="/harvesters" className="block px-4 py-2 hover:bg-gray-200">Harvesters</Link>
                                <Link to="/ploughs" className="block px-4 py-2 hover:bg-gray-200">Ploughs</Link>
                                <Link to="/sprayers" className="block px-4 py-2 hover:bg-gray-200">Sprayers</Link>
                            </div>
                        )}
                    </div> */}

                    <Link to="/services" className="text-white hover:text-yellow-300 transition">Services</Link>
                    <Link to="/contact" className="text-white hover:text-yellow-300 transition">Contact</Link>
                    <Link to="/login" className="bg-yellow-400 text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
                        Login
                    </Link>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="absolute top-14 left-0 w-full bg-green-800 text-white md:hidden shadow-lg">
                        <Link
                            to="/"
                            className="block py-3 px-6 hover:bg-green-900"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block py-3 px-6 hover:bg-green-900"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>

                        {/* Products Dropdown in Mobile */}
                        <div className="border-t border-green-700">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="w-full text-left py-3 px-6 flex justify-between hover:bg-green-900"
                            >
                                Products <FaChevronDown />
                            </button>
                            {dropdownOpen && (
                                <div className="bg-green-900 text-white">
                                    <Link to="/tractors" className="block py-2 px-8 hover:bg-green-700">Tractors</Link>
                                    <Link to="/harvesters" className="block py-2 px-8 hover:bg-green-700">Harvesters</Link>
                                    <Link to="/ploughs" className="block py-2 px-8 hover:bg-green-700">Ploughs</Link>
                                    <Link to="/sprayers" className="block py-2 px-8 hover:bg-green-700">Sprayers</Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/services"
                            className="block py-3 px-6 hover:bg-green-900"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact"
                            className="block py-3 px-6 hover:bg-green-900"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/login"
                            className="block py-3 px-6 bg-yellow-500 text-center text-green-800 font-semibold hover:bg-yellow-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
