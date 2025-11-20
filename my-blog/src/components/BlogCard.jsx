import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const documentId = blog.documentId;

  const BASE_MEDIA_URL = "https://jubilant-respect-a8c8f10627.media.strapiapp.com";


  // console.log("BLOG DATA:", blog);

  // Correct image extraction from Strapi Cloud
  const coverUrl =
  blog.coverImage?.[0]?.url
    ? blog.coverImage[0].url
    : "https://via.placeholder.com/800x450";

      // console.log("Cover image check:", blog.coverImage);


  return (
    <Link to={`/blog/${documentId}`}>
      <div className="w-72 md:w-80 relative flex-shrink-0 overflow-hidden rounded-lg cursor-pointer m-2">
        
        {/* Cover Image */}
        <img
          src={coverUrl}
          alt={blog.Title}
          className="w-full h-72 md:h-80 object-cover opacity-80 transition-transform duration-300 hover:scale-105"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white font-semibold text-lg md:text-xl mb-2">
            {blog.subTitle}
          </h3>

          <p className="text-gray-200 text-sm md:text-base">
            {blog.description?.slice(0, 80)}...
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
