import React from "react";
import Carousel from "./Carousel";
const businessInfo = [
  { label: "Nature of Business", value: "Trader - Wholesaler/Distributor" },
  { label: "Total Number of Employees", value: "26 to 50 People" },
  { label: "GST Registration Date", value: "01-07-2017" },
  { label: "Legal Status of Firm", value: "Partnership" },
  { label: "Annual Turnover", value: "5 - 25 Cr" },
  { label: "Import Export Code (IEC)", value: "24130******" },
  { label: "GST No.", value: "24AASFM1611K1Z8" },
];

const products = [
  {
    img: "/images/product1.png",
    title: "Agriculture battery sprayer Double Motor...",
    price: "₹ 1,790/Piece",
    details: ["Tank Capacity: 16L", "Power Source: Battery", "Brand: SHIVAM"],
  },
  {
    img: "/images/product2.png",
    title: "BATTERY SPRAY PUMP 12V14AH SINGLE...",
    price: "₹ 1,690/Piece",
    details: ["Capacity: 16L", "Material: PVC", "Brand: SHIVAM"],
  },
];



const productList = [
  {
    name: "Agriculture Battery Sprayers",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/390460588/JH/TI/YH/10027678/agriculture-sprayer-richflow-12v14ah-500x500.jpeg",
  },
  {
    name: "Battery Sprayers Nozzle",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/1/UR/LS/BM/10027678/1-hole-pato-nozzle-125x125.jpg",
  },
  {
    name: "Motors",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/1/FW/JN/NG/10027678/product-jpeg-125x125.png",
  },
  {
    name: "Hose Pipe",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/12/471651000/VT/IX/IX/10027678/1732602619862-watmrka-125x125.jpg",
  },
  {
    name: "Battery Charger",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/1/BA/FT/OQ/10027678/1-7-a-tanneng-sprayer-battery-charger-125x125.jpg",
  },
  {
    name: "Brush Cutter",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2021/12/ZO/FQ/ZK/10027678/product-jpeg-125x125.jpg",
  },
];

const HomePage = () => {
  return (

    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="overflow-x-auto flex space-x-4 p-3 bg-gray-100 rounded-lg mb-0.5">
        {productList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 min-w-[100px]"
          >
            <div className="bg-white p-2 shadow-md rounded-full w-16 h-16 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-xs text-center font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
      <Carousel />

      {/* Header Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to <span className="text-green-700">Arul Jayam Agri Machinery</span>
        </h1>
        <p className="text-gray-600 mt-2">
          We <strong>"Arul Jayam Agri Machinery"</strong> are engaged in{" "}
          <span className="font-bold text-gray-800">
            IMPORTER, WHOLESALER, AND MANUFACTURER
          </span>{" "}
          of high-quality agricultural sprayers, batteries, motors, and spare parts.
        </p>
        <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">
          Contact Us
        </button>
      </section>




      {/* Section Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Product Range</h2>

      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-700 mt-2">Agriculture Battery Sprayer</h3>
        <a href="#" className="text-green-600 hover:underline text-lg">
          View All categories &gt;
        </a>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
        {products.map((product, index) => (
          <div key={index} className="border p-3 rounded-lg shadow-sm bg-white">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="font-semibold mt-2 text-sm">{product.title}</h3>
            <p className="text-gray-600 text-sm">{product.price}</p>
            <ul className="text-xs text-gray-500 mt-1 list-disc list-inside">
              {product.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <button className="bg-green-600 text-white px-4 py-2 mt-2 rounded-lg w-full">
              Get Quote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;