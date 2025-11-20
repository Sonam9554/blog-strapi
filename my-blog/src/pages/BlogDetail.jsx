import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogDetail = () => {
  const { documentId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!documentId) return;

    fetch(`http://localhost:1337/api/blogs/${documentId}?populate=*`)
      .then((res) => res.json())
      .then((data) => setBlog(data.data));
  }, [documentId]);

  if (!blog)
    return (
      <div className="text-white p-10 bg-black min-h-screen">Loading...</div>
    );

  const cover = blog?.coverImage?.[0]?.url;

  return (
    <div className="min-h-screen bg-black">
      <div className="w-full mt-19 px-8 max-w-4xl mx-auto text-white">

        {/* COVER IMAGE */}
        {cover && (
          <img
            src={`http://localhost:1337${cover}`}
            className="w-full rounded-lg"
          />
        )}

        <h1 className="mt-6 text-3xl font-bold">{blog.Title}</h1>
        <p className="mt-4 text-gray-300">{blog.description}</p>

        {/* MARKDOWN */}
        <div className="mt-6 prose prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mt-6 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mt-5 mb-3">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 leading-relaxed">{children}</p>
              ),

              img: ({ src, alt }) => {
                // IF absolute URL → use src as is
                const finalSrc = src.startsWith("http")
                  ? src
                  : `http://localhost:1337${src}`;

                return (
                  <img
                    src={finalSrc}
                    alt={alt}
                    className="w-full rounded-lg my-4"
                  />
                );
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
