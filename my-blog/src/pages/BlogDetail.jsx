import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogDetail = () => {
  const { documentId } = useParams();
  const [blog, setBlog] = useState(null);

  const BASE_API_URL = "https://jubilant-respect-a8c8f10627.strapiapp.com";

  useEffect(() => {
    if (!documentId) return;

    fetch(`${BASE_API_URL}/api/blogs/${documentId}?populate=*`)
      .then((res) => res.json())
      .then((data) => setBlog(data.data));
  }, [documentId]);

  if (!blog) {
    return <div className="text-white p-10 bg-black min-h-screen">Loading...</div>;
  }

  // Get cover image URL correctly
  const coverUrl =
    blog.coverImage?.[0]?.url
      ? blog.coverImage[0].url
      : null;

  return (
    <div className="min-h-screen bg-black">
      <div className="w-full mt-19 px-8 max-w-4xl mx-auto text-white">
        {coverUrl && <img src={coverUrl} className="w-full rounded-lg" />}

        <h1 className="mt-6 text-3xl font-bold">{blog.Title}</h1>
        <p className="mt-4 text-gray-300">{blog.description}</p>

        <div className="mt-6 prose prose-invert max-w-none">


          <ReactMarkdown
            components={{
              img: ({ src, alt }) => {
                // Replace local localhost URLs with Strapi Cloud URL
                let finalSrc = src;
                if (src.startsWith("http://localhost:1337/uploads/")) {
                  const fileName = src.split("/").pop(); // get the file name
                  finalSrc = `https://jubilant-respect-a8c8f10627.media.strapiapp.com/${fileName}`;
                }
                return <img src={finalSrc} alt={alt} className="w-full rounded-lg my-4" />;
              },
            }}
          >
            {blog.content}
          </ReactMarkdown>



        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
