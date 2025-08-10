import React, { useState } from 'react';
import ProductCard from './ProductCard';

const mockProducts = [
  {
    _id: '1',
    name: 'Tractor Model X',
    price: 450000,
    discountedPrice: 420000,
    mainImage: 'https://via.placeholder.com/300x200?text=Tractor',
    category: 'Tractors',
    brand: 'John Deere',
    stock: 10,
    rating: { average: 4.5, count: 12 },
  },
  {
    _id: '2',
    name: 'Power Sprayer',
    price: 15000,
    mainImage: 'https://via.placeholder.com/300x200?text=Sprayer',
    category: 'Sprayers',
    brand: 'Kisan',
    stock: 3,
    rating: { average: 4.0, count: 8 },
  },
  // Add more mock products as needed
];

const categories = ['Tractors', 'Sprayers', 'Tillers', 'Harvesters'];
const brands = ['John Deere', 'Kisan', 'Mahindra', 'Kubota'];
const horsepowers = ['10-20 HP', '21-30 HP', '31-40 HP', '41+ HP'];

const Products = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedHorsepower, setSelectedHorsepower] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState('newest');
  const [showSidebar, setShowSidebar] = useState(false);

  // Mock auto-suggest
  const autoSuggest = search
    ? mockProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).slice(0, 5)
    : [];

  // Filter products
  const filteredProducts = mockProducts.filter(p => {
    return (
      (!selectedCategory || p.category === selectedCategory) &&
      (!selectedBrand || p.brand === selectedBrand) &&
      (!selectedHorsepower || p.name.includes(selectedHorsepower)) &&
      (!minPrice || p.price >= parseInt(minPrice)) &&
      (!maxPrice || p.price <= parseInt(maxPrice)) &&
      (!search || p.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'popular') return b.rating.average - a.rating.average;
    return b._id.localeCompare(a._id); // newest first
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className={`w-full lg:w-64 bg-white rounded-lg shadow-md p-4 mb-6 lg:mb-0 ${showSidebar ? '' : 'hidden lg:block'}`}>
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="">All</option>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
            <select
              value={selectedBrand}
              onChange={e => setSelectedBrand(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="">All</option>
              {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Horsepower</label>
            <select
              value={selectedHorsepower}
              onChange={e => setSelectedHorsepower(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="">All</option>
              {horsepowers.map(hp => <option key={hp} value={hp}>{hp}</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
                placeholder="Min"
                className="w-1/2 px-2 py-1 border rounded-lg"
              />
              <input
                type="number"
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
                placeholder="Max"
                className="w-1/2 px-2 py-1 border rounded-lg"
              />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Search and Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div className="relative w-full sm:w-1/2">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-green-500"
                placeholder="Search products..."
              />
              {/* Auto-suggest dropdown */}
              {search && autoSuggest.length > 0 && (
                <ul className="absolute z-10 bg-white border rounded-lg mt-1 w-full shadow-lg">
                  {autoSuggest.map(p => (
                    <li
                      key={p._id}
                      className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                      onClick={() => setSearch(p.name)}
                    >
                      {p.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              >
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="popular">Popular</option>
              </select>
            </div>
            <button
              className="lg:hidden px-4 py-2 bg-green-600 text-white rounded-lg"
              onClick={() => setShowSidebar(v => !v)}
            >
              Filters
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          {/* Pagination (mock) */}
          <div className="flex justify-center mt-8">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg">Previous</button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg ml-2">Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products; 