// import React from "react";
// import { Link } from "react-router-dom";

// const BlogCard = ({ blog }) => {
//   const coverUrl =
//     blog.coverImage && blog.coverImage.length > 0
//       ? `http://localhost:1337${blog.coverImage[0].url}`
//       : "https://via.placeholder.com/300x300"; // fallback image

//   return (
//     <Link to={`/blog/${blog.documentId}`}>
//       <div className="w-72 md:w-80 relative flex-shrink-0 overflow-hidden rounded-lg cursor-pointer m-2">
//         {/* Image with lower opacity */}
//         <img
//           src={coverUrl}
//           alt={blog.Title || "Blog cover"}
//           className="w-full h-72 md:h-80 object-cover opacity-80 transition-transform duration-300 hover:scale-105"
//         />

//         {/* Overlay text */}
//         <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4">
//           {/* Only show subTitle as main text */}
//           {blog.subTitle && (
//             <h3 className="text-white font-semibold text-lg md:text-xl mb-2">
//               {blog.subTitle}
//             </h3>
//           )}

//           {/* Description below subtitle */}
//           <p className="text-gray-200 text-sm md:text-base">
//             {blog.description?.slice(0, 80) || "No description available"}...
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };
// export default BlogCard;





import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  // blog object is exactly the one from Strapi array (blog = data.data[i])

  const documentId = blog.documentId;  // ← REAL documentId

  const coverUrl =
    blog.coverImage?.[0]?.url
      ? `http://localhost:1337${blog.coverImage[0].url}`
      : "https://via.placeholder.com/800x450";

  return (
    <Link to={`/blog/${documentId}`}>
      <div className="w-72 md:w-80 relative flex-shrink-0 overflow-hidden rounded-lg cursor-pointer m-2">
        <img
          src={coverUrl}
          alt={blog.Title}
          className="w-full h-72 md:h-80 object-cover opacity-80 transition-transform duration-300 hover:scale-105"
        />

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



