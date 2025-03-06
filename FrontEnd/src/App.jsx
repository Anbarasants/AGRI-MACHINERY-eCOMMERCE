import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Ensure this file exists
import About from './components/About';
import ContactForm from './components/Contact';
import Login from './components/authentication/UserLogin';
import ProductList from './components/Product/ProductList';
import ProductDetails from './components/Product/ProductDetails';
import Services from './components/service/Services';
import ServiceRequest from './components/service/ServiceRequest';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';


function App() {
    return (
        <BrowserRouter>
            <Navbar />  {/* Navbar should be placed outside Routes if it's static */}
            <Routes>

                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactForm />} /> 
                <Route path="/services" element={<Services />} />
                <Route path="/service-request" element={<ServiceRequest />} />
                <Route path="/blogs" element={<BlogList />} />
                <Route path="/blogs/:id" element={<BlogDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;



