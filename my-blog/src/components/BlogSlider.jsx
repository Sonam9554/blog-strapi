import React, { useRef } from "react";
import BlogCard from "./BlogCard";
import next from "../assets/next.png";
import pre from "../assets/pre.png";

const BlogSlider = ({ title, blogs }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2; // scroll half container width
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="my-10 relative">
      {/* Title & View All */}
      <div className="flex justify-between px-4 items-center mb-4">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <a
          className="text-white border border-color-white rounded-full p-2 cursor-pointer"
          href={`/blogs/${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          View All
        </a>
      </div>

      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10"
        >
          <img src={pre} alt="Previous" className="w-6 h-6" />
        </button>

        {/* Scrollable blogs - hide scrollbar */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden px-10"
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10"
        >
          <img src={next} alt="Next" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default BlogSlider;
