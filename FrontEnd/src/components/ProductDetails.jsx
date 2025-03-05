import React from "react";
import { useParams, Link } from "react-router-dom";

// Dummy Product Data
const products = [
  { id: 1, name: "John Deere Tractor", category: "Tractor", price: 5000, image: "https://via.placeholder.com/400", description: "Powerful tractor with great efficiency." },
  { id: 2, name: "Kubota Harvester", category: "Harvester", price: 8000, image: "https://via.placeholder.com/400", description: "High-speed harvester with advanced technology." },
  { id: 3, name: "Plough Machine", category: "Plough", price: 3000, image: "https://via.placeholder.com/400", description: "Durable plough for efficient soil turning." },
  { id: 4, name: "Sprayer Pump", category: "Sprayer", price: 1200, image: "https://via.placeholder.com/400", description: "High-pressure sprayer pump for crops." },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-red-500 mt-10">Product not found!</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Product Image */}
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />

        {/* Product Details */}
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-green-600 text-2xl font-semibold mt-2">₹{product.price}</p>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-4">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Buy Now</button>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg">Add to Cart</button>
          </div>

          <Link to="/" className="block mt-6 text-blue-500">← Back to Products</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
