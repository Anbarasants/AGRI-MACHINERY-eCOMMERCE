import React from "react";
import backgroundImage from "../assets/bgimg.png";
import Slider from "./Slider";

const Home = () => (
  <div className="bg-gray-100">
    {/* Hero Section */}
    <div
      className="relative h-screen flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 p-6 bg-black bg-opacity-50 rounded-lg text-white max-w-3xl">
        <img
          src="https://d171jb2uwdr9zn.cloudfront.net/unsafe/0x200/middle/smart/filters:strip_icc():strip_exif():format(webp)/https://ukno.in/uploads/images/ARUL_JAYAM_AGRI_MACHINERY_featured_1127299451.jpg"
          alt="Logo"
          className="mx-auto mb-4 w-32"
        />
        <h2 className="text-4xl font-bold">ARUL JAYAM AGRI MACHINERY</h2>
        <p className="mt-2 text-lg">
          Kallakurichi Main Road, Myilambarai, Sankarapuram, Tamil Nadu 606401
        </p>
        <p>Email: mech2vijay@gmail.com</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            Call
          </button>
          <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
            WhatsApp
          </button>
          <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
            Map
          </button>
        </div>
        <button className="mt-6 bg-orange-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600">
          Find Out More
        </button>
      </div>
    </div>

    {/* Slider Section */}
    <div className="py-10 px-6">
      <Slider />
    </div>

    {/* Product Categories */}
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Product Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {["Tractors", "Harvesters", "Ploughs", "Sprayers"].map((category, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-lg text-center hover:shadow-lg transition"
          >
            <img
              src={`https://source.unsplash.com/200x200/?${category}`}
              alt={category}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-3 font-semibold text-lg">{category}</h3>
          </div>
        ))}
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {["Tractor", "Harvester", "Sprayer"].map((product, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src={`https://source.unsplash.com/300x200/?${product}`}
              alt={product}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-3 text-xl font-semibold">{product}</h3>
            <p className="text-green-600 font-bold mt-2">$5,999</p>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>

    {/* Special Offers */}
    <section className="py-12 px-6 bg-yellow-100">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Special Offers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {["10% Off Tractors", "Free Servicing", "Discount on Spare Parts"].map((offer, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-red-600">{offer}</h3>
            <p className="mt-2 text-gray-600">Limited time only!</p>
          </div>
        ))}
      </div>
    </section>

    {/* Our Services */}
    <section className="py-12 px-6 bg-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {[
          { title: "Maintenance", desc: "Keep your machines running smoothly." },
          { title: "Spare Parts", desc: "Find genuine replacement parts." },
          { title: "Customer Support", desc: "24/7 assistance for your needs." },
        ].map((service, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Call to Action */}
    <section className="py-12 text-center bg-green-700 text-white">
      <h2 className="text-3xl font-bold">
        Get the Best Agricultural Machinery Today!
      </h2>
      <p className="mt-2 text-lg">Upgrade your farm with high-quality equipment.</p>
      <button className="mt-4 px-6 py-2 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition">
        Browse Products
      </button>
    </section>
  </div>
);

export default Home;
