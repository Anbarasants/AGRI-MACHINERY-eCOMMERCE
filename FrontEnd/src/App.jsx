import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav'
import Home from './components/Home';   
import About from './components/About';
import ContactForm from './components/Contact';
import ProductList from './components/Product/ProductList';
import ProductDetails from './components/Product/ProductDetails';
import Services from './components/service/Services';
import ServiceRequest from './components/service/ServiceRequest';
import AdminDashboard from './components/admin/AdminDashboard';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import ForgotPassword from './components/authentication/ForgotPassword';
import Profile from './components/profile/Profile';
import Products from './components/Product/Products';
// import BusinessSection from './components/BusinessSection';


function App() {
    return (
        <BrowserRouter>
            <Navbar />  {/* Navbar should be placed outside Routes if it's static */}
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/admin/dashboard" element={<AdminDashboard/>} />
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactForm />} /> 
                <Route path="/services" element={<Services />} />
                <Route path="/service-request" element={<ServiceRequest />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <MobileNav/>
        </BrowserRouter>
    );
}

export default App;



