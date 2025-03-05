import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6 mt-15">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-6 text-green-700">
        About Arul Jayam Agri Machinery
      </h2>

      {/* Business Overview */}
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        <span className="font-semibold">Arul Jayam Agri Machinery</span> is a leading provider of 
        high-quality agricultural machinery and equipment. With a strong commitment to innovation 
        and customer satisfaction, we offer a wide range of products tailored to meet the 
        needs of modern farmers.
      </p>

      {/* Company History & Mission */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-green-600">🌱 Our Mission</h3>
        <p className="text-lg text-gray-700 mt-2 max-w-3xl mx-auto">
          Our goal is to support farmers with **efficient, reliable, and affordable** 
          agricultural solutions. We strive to make farming easier and more productive 
          through advanced machinery, expert services, and outstanding customer support.
        </p>
      </div>

      {/* Products & Services */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-green-600 text-center">🚜 Our Products & Services</h3>
        <div className="grid md:grid-cols-2 gap-6 mt-4 max-w-4xl mx-auto">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h4 className="text-xl font-semibold text-green-700">🌾 Agricultural Machinery</h4>
            <p className="text-gray-700">
              We provide a wide range of agricultural equipment including **tractors, 
              harvesters, power tillers, and plows** to help farmers improve efficiency.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h4 className="text-xl font-semibold text-green-700">🛠️ Repair & Maintenance</h4>
            <p className="text-gray-700">
              Our **expert technicians** offer regular maintenance, repairs, and servicing 
              to ensure that your machinery runs smoothly and lasts longer.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h4 className="text-xl font-semibold text-green-700">📦 Spare Parts & Accessories</h4>
            <p className="text-gray-700">
              We stock **genuine spare parts** and accessories for various types of 
              agricultural machinery to keep your equipment in top condition.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h4 className="text-xl font-semibold text-green-700">📢 Training & Consultation</h4>
            <p className="text-gray-700">
              We offer **training programs** for farmers on how to operate and maintain 
              machinery effectively for better productivity and yield.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Support Section */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-green-600">📞 Customer Support</h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-2">
          We are dedicated to providing excellent customer service. If you need assistance, 
          feel free to **call, WhatsApp, or visit us**.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow">
            📞 Call Now
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow">
            💬 WhatsApp
          </button>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-center text-green-600">📍 Our Location</h3>
        <div className="mt-4 w-full h-64 md:h-96 rounded-lg overflow-hidden">
          <iframe
            title="Google Map Location"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3904.5487548078713!2d78.9281868!3d11.8668271!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDUyJzAxLjIiTiA3OMKwNTUnMzguMyJF!5e0!3m2!1sen!2sin!4v1741156641220!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
