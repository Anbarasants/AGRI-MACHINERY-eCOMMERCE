import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Zap } from 'lucide-react';

const mockProduct = {
  _id: '1',
  name: 'Tractor Model X',
  price: 450000,
  mrp: 500000,
  discountedPrice: 420000,
  images: [
    'https://via.placeholder.com/600x400?text=Tractor+1',
    'https://via.placeholder.com/600x400?text=Tractor+2',
    'https://via.placeholder.com/600x400?text=Tractor+3',
  ],
  category: 'Tractors',
  brand: 'John Deere',
  stock: 10,
  rating: { average: 4.5, count: 12 },
  description: 'A powerful tractor for all your agricultural needs. Suitable for large and small farms.',
  specs: {
    'Engine Power': '45 HP',
    'Fuel Type': 'Diesel',
    'Transmission': 'Manual',
    'Warranty': '2 Years',
  },
  warranty: '2 Years',
};

const mockReviews = [
  { id: 1, user: 'Ravi', rating: 5, comment: 'Excellent tractor, very powerful!', date: '2024-06-01' },
  { id: 2, user: 'Sita', rating: 4, comment: 'Good value for money.', date: '2024-05-20' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);
  const [review, setReview] = useState({ rating: 0, comment: '' });
  const [reviews, setReviews] = useState(mockReviews);

  const product = mockProduct; // Replace with API call in real app

  const handleAddToWishlist = () => setWishlist(w => !w);
  const handleAddToCart = () => setCartAdded(true);
  const handleBuyNow = () => alert('Proceed to checkout (mock)');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!review.rating || !review.comment) return;
    setReviews([
      { id: Date.now(), user: 'You', rating: review.rating, comment: review.comment, date: new Date().toISOString().slice(0, 10) },
      ...reviews,
    ]);
    setReview({ rating: 0, comment: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Carousel */}
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg border"
              />
              <div className="flex mt-2 space-x-2 justify-center">
                {product.images.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt="thumb"
                    className={`w-16 h-12 object-cover rounded cursor-pointer border-2 ${selectedImage === idx ? 'border-green-600' : 'border-gray-200'}`}
                    onClick={() => setSelectedImage(idx)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded mr-2">{product.category}</span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.brand}</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating.average) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
                <span className="ml-2 text-sm text-gray-600">({product.rating.count} reviews)</span>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl font-bold text-green-700">₹{product.discountedPrice.toLocaleString()}</span>
                <span className="text-lg text-gray-500 line-through">₹{product.mrp.toLocaleString()}</span>
                <span className="text-sm text-red-600 font-semibold">{Math.round(((product.mrp - product.discountedPrice) / product.mrp) * 100)}% OFF</span>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 mb-2">{product.description}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="font-medium text-gray-600">{key}:</span>
                      <span className="text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Warranty: {product.warranty}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-4">
              <button
                className={`p-2 rounded-full border ${wishlist ? 'bg-red-100 text-red-600 border-red-400' : 'bg-gray-100 text-gray-600 border-gray-300'} hover:bg-red-200`}
                onClick={handleAddToWishlist}
              >
                <Heart className="h-6 w-6" />
              </button>
              <button
                className={`flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center ${cartAdded ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleAddToCart}
                disabled={cartAdded}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {cartAdded ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center"
                onClick={handleBuyNow}
              >
                <Zap className="h-5 w-5 mr-2" />
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Ratings & Reviews</h3>
          <form onSubmit={handleReviewSubmit} className="mb-6 flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setReview(r => ({ ...r, rating: star }))}
                >
                  <Star className={`h-6 w-6 ${review.rating >= star ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                </button>
              ))}
            </div>
            <input
              type="text"
              value={review.comment}
              onChange={e => setReview(r => ({ ...r, comment: e.target.value }))}
              className="flex-1 px-3 py-2 border rounded-lg focus:ring-green-300"
              placeholder="Write a review..."
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Submit
            </button>
          </form>
          <div className="space-y-4">
            {reviews.length === 0 && <div className="text-gray-500">No reviews yet.</div>}
            {reviews.map(r => (
              <div key={r.id} className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex items-center mb-1">
                  <span className="font-semibold text-gray-800 mr-2">{r.user}</span>
                  <span className="flex items-center">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className={`h-4 w-4 ${r.rating >= star ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </span>
                  <span className="ml-2 text-xs text-gray-500">{r.date}</span>
                </div>
                <div className="text-gray-700">{r.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
