// ContactForm.js 

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted');
        // Form submission logic here
    };

    return (
        <section id="contact" className="py-12 bg-white mt-15">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
                    Contact Us
                </h2>
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md
                            focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Your Email"
                            required />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Your Message"
                            required>
                            
                        </textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-6 py-2
                            rounded-md hover:bg-green-700 transition-colors">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
