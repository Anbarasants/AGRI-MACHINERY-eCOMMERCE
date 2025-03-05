import React from "react";
import { useParams, Link } from "react-router-dom";

// Dummy blog content
const blogs = [
  {
    id: 1,
    title: "Top 5 Tractors for Small Farmers in 2025",
    content: "Choosing the right tractor can boost your farm's efficiency. Here are the best options...",
    image: "https://source.unsplash.com/800x400/?tractor,agriculture",
  },
  {
    id: 2,
    title: "How to Maintain Your Harvester for Longer Life",
    content: "Regular maintenance of your harvester can increase its lifespan and efficiency...",
    image: "https://source.unsplash.com/800x400/?harvester,farmer",
  },
  {
    id: 3,
    title: "Organic Farming: The Future of Agriculture",
    content: "Learn how organic farming can improve yield and soil health sustainably...",
    image: "https://source.unsplash.com/800x400/?organic,farming",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p className="text-center text-red-500">Blog not found</p>;
  }

  return (
    <div className="container mx-auto p-6 mt-15">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
      <h2 className="text-3xl font-bold mt-4">{blog.title}</h2>
      <p className="text-gray-700 mt-4">{blog.content}</p>
      <Link to="/blogs" className="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded">
        Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetails;
