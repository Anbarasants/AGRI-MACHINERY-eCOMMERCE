import React from "react";
import { Link } from "react-router-dom";

// Dummy blog data
const blogs = [
  {
    id: 1,
    title: "Top 5 Tractors for Small Farmers in 2025",
    summary: "Choosing the right tractor can boost your farm's efficiency. Here are the best options for 2025.",
    image: "https://source.unsplash.com/400x250/?tractor,agriculture",
  },
  {
    id: 2,
    title: "How to Maintain Your Harvester for Longer Life",
    summary: "Regular maintenance of your harvester can increase its lifespan and efficiency.",
    image: "https://source.unsplash.com/400x250/?harvester,farmer",
  },
  {
    id: 3,
    title: "Organic Farming: The Future of Agriculture",
    summary: "Learn how organic farming can improve yield and soil health sustainably.",
    image: "https://source.unsplash.com/400x250/?organic,farming",
  },
];

const BlogList = () => {
  return (
    <div className="container mx-auto p-6 mt-15">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Agricultural News & Tips</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg shadow-lg p-4">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
            <p className="text-gray-600">{blog.summary}</p>
            <Link
              to={`/blogs/${blog.id}`}
              className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
