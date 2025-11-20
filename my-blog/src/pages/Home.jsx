import React, { useEffect, useState } from "react";
import BlogSlider from "../components/BlogSlider";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'


const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const BASE_URL = "https://jubilant-respect-a8c8f10627.strapiapp.com";

  useEffect(() => {
    fetch(`${BASE_URL}/api/blogs?populate=*`)
      .then((res) => res.json())
      .then((data) => setBlogs(data.data)); // <- your blogs array
  }, []);

  // Group blogs by title for sliders
  const groupedBlogs = blogs.reduce((acc, blog) => {
    if (!acc[blog.Title]) acc[blog.Title] = [];
    acc[blog.Title].push(blog);
    return acc;
  }, {});

  return (
    <div className=" bg-[#1c1c1c] min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="w-full bg-black text-center py-24">
        <h1 className="text-6xl font-extrabold text-white">Blog</h1>
        <p className="mt-4 text-gray-100 max-w-2xl mx-auto leading-relaxed">
          Chcesz poczytać coś do kawki? Tutaj znajdziesz smartfonowe porady, inspiracje, zielone ciekawostki, nowinki technologiczne i inne życiowe przydasie – od Orange Flex dla Ciebie.
        </p>
        <input
          type="text"
          placeholder="Search blogs..."
          className="mt-8 px-5 py-3 w-[28rem] max-w-full rounded-lg text-black text-lg outline-none"
        />
      </div>

      {/* Blog Sliders */}
      <div className="px-6">
        {Object.entries(groupedBlogs).map(([title, blogsByTitle]) => (
          <BlogSlider key={title} title={title} blogs={blogsByTitle} />
        ))}
      </div>
        <Footer/>
    </div>
    
  );
};

export default Home;
