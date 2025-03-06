import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link to="/" className="text-green-600 text-2xl font-bold">
                    Arul Jayam <span className="text-green-600">Agri Machinery</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
                    <Link to="/services" className="text-gray-700 hover:text-green-600">Services</Link>
                    <Link to="/products" className="text-gray-700 hover:text-green-600">Products</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
                </div>

                {/* Login Dropdown */}
                <div className="relative group hidden md:block">
                    <button className="text-gray-700 flex items-center space-x-2">
                        <FaUser size={22} />
                        <FaChevronDown size={12} />
                    </button>
                    <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">My Profile</Link>
                        <Link to="/orders" className="block px-4 py-2 hover:bg-gray-200">Orders</Link>
                        <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-200">Wishlist</Link>
                        <Link to="/rewards" className="block px-4 py-2 hover:bg-gray-200">Rewards</Link>
                        <Link to="/giftcards" className="block px-4 py-2 hover:bg-gray-200">Gift Cards</Link>
                        <Link to="/login" className="block px-4 py-2 text-blue-600 hover:underline">Login / Sign Up</Link>
                    </div>
                </div>

                {/* Icons */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/login" className="text-gray-700 hover:text-green-600 flex items-center space-x-1">
                        <FaUser size={20} />
                        <span>Login</span>
                    </Link>
                    <Link to="/cart" className="text-gray-700 hover:text-green-600">
                        <FaShoppingCart size={22} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md w-full absolute left-0 top-16 p-4 flex flex-col space-y-4">
                    <Link to="/" className="text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/services" className="text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/products" className="text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Products</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to="/login" className="text-gray-700 hover:text-green-600 flex items-center space-x-1" onClick={() => setIsOpen(false)}>
                        <FaUser size={20} />
                        <span>Login</span>
                    </Link>
                    <Link to="/cart" className="text-gray-700 hover:text-green-600" onClick={() => setIsOpen(false)}>
                        <FaShoppingCart size={22} />
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
