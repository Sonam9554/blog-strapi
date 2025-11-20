import React from "react";
import { useParams } from "react-router-dom";
import BlogCard from "./BlogCard";

const BlogsPage = ({ allBlogs }) => {
  const { title } = useParams(); // e.g., 'flex-travel'

  // Filter blogs matching URL slug
  const filteredBlogs = (allBlogs || []).filter(
    (blog) =>
      blog.Title.toLowerCase().replace(/\s+/g, '-') === title.toLowerCase()
  );

  // Get display title from first matching blog
  const displayTitle =
    filteredBlogs.length > 0 ? filteredBlogs[0].Title : title.replace(/-/g, ' ');

  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: "#121212" }}>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        {displayTitle}
      </h1>
      {filteredBlogs.length > 0 ? (
        <div className="flex flex-wrap gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <p className="text-gray-300">No blogs found for this title.</p>
      )}
    </div>
  );
};

export default BlogsPage;
