import React, { useState } from "react";
import { Link } from "react-router-dom";

// Dummy Product Data
const products = [
  { id: 1, name: "John Deere Tractor", category: "Tractor", price: 5000, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Kubota Harvester", category: "Harvester", price: 8000, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Plough Machine", category: "Plough", price: 3000, image: "https://via.placeholder.com/200" },
  { id: 4, name: "Sprayer Pump", category: "Sprayer", price: 1200, image: "https://via.placeholder.com/200" },
];

const ProductList = () => {
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  // Filter products based on category
  const filteredProducts = category === "All" ? products : products.filter(p => p.category === category);

  // Sort products by price
  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="container mx-auto p-6 mt-15">
      <h2 className="text-3xl font-bold text-center mb-6">Agricultural Machinery</h2>

      {/* Filters */}
      <div className="flex justify-between mb-4">
        {/* Category Filter */}
        <select
          className="border p-2 rounded"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="All">All Categories</option>
          <option value="Tractor">Tractors</option>
          <option value="Harvester">Harvesters</option>
          <option value="Plough">Ploughs</option>
          <option value="Sprayer">Sprayers</option>
        </select>

        {/* Sorting */}
        <select
          className="border p-2 rounded"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Product List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-green-600 font-bold">₹{product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
