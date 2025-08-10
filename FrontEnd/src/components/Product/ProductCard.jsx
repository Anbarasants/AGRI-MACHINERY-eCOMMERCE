import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const renderDiscount = () => {
    if (product.discountedPrice && product.discountedPrice < product.price) {
      const discount = Math.round(((product.price - product.discountedPrice) / product.price) * 100);
      return (
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-2 left-2">
          {discount}% OFF
        </span>
      );
    }
    return null;
  };

  const renderStockStatus = () => {
    if (product.stock === 0) {
      return (
        <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded absolute top-2 right-2">
          Out of Stock
        </span>
      );
    } else if (product.stock < 5) {
      return (
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded absolute top-2 right-2">
          Low Stock
        </span>
      );
    }
    return null;
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/3 relative">
            <img 
              src={product.mainImage || product.images?.[0] || 'https://via.placeholder.com/300x200?text=No+Image'} 
              alt={product.name} 
              className="w-full h-48 md:h-full object-cover"
            />
            {renderDiscount()}
            {renderStockStatus()}
          </div>

          {/* Product Details */}
          <div className="md:w-2/3 p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.category}</span>
            </div>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.shortDescription || product.description}</p>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < Math.floor(product.rating?.average || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">({product.rating?.count || 0} reviews)</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                {product.discountedPrice && product.discountedPrice < product.price ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">{formatPrice(product.discountedPrice)}</span>
                    <span className="text-lg text-gray-500 line-through">{formatPrice(product.price)}</span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-green-600">{formatPrice(product.price)}</span>
                )}
              </div>
              
              <div className="text-sm text-gray-500">
                <p>Brand: {product.brand}</p>
                <p>Stock: {product.stock} units</p>
              </div>
            </div>

            <div className="flex space-x-3">
              <Link
                to={`/product/${product._id}`}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Link>
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view (default)
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative">
        <img 
          src={product.mainImage || product.images?.[0] || 'https://via.placeholder.com/300x200?text=No+Image'} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        {renderDiscount()}
        {renderStockStatus()}
        
        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <div className="flex space-x-2">
            <Link
              to={`/product/${product._id}`}
              className="bg-white text-gray-800 p-2 rounded-full hover:bg-green-600 hover:text-white transition"
            >
              <Eye className="h-5 w-5" />
            </Link>
            <button 
              className="bg-white text-gray-800 p-2 rounded-full hover:bg-green-600 hover:text-white transition"
              disabled={product.stock === 0}
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded ml-2">{product.category}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.shortDescription || product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${i < Math.floor(product.rating?.average || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.rating?.count || 0})</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div>
            {product.discountedPrice && product.discountedPrice < product.price ? (
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-green-600">{formatPrice(product.discountedPrice)}</span>
                <span className="text-sm text-gray-500 line-through">{formatPrice(product.price)}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-green-600">{formatPrice(product.price)}</span>
            )}
          </div>
          
          <span className="text-xs text-gray-500">{product.brand}</span>
        </div>

        <div className="flex space-x-2">
          <Link
            to={`/product/${product._id}`}
            className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition text-sm text-center"
          >
            View Details
          </Link>
          <button 
            className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
