import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.category}</p>
      <p className="text-green-600 font-bold text-lg">₹{product.price}</p>
      <button className="mt-2 bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
