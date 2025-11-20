
// import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import BlogDetail from "./pages/BlogDetail";
// import BlogsPage from "./components/BlogsPage";

// export default function App() {
//   const [allBlogs, setAllBlogs] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:1337/api/blogs?populate=*")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.data) {
//           setAllBlogs(data.data); // only take the array of blogs
//         } else {
//           console.error("No blogs found:", data.error);
//         }
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home allBlogs={allBlogs} />} />
//         <Route path="/blog/:id" element={<BlogDetail />} />
//         <Route path="/blogs/:title" element={<BlogsPage allBlogs={allBlogs} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }



// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import BlogsPage from "./components/BlogsPage";


export default function App() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1337/api/blogs?populate=*")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setAllBlogs(data.data); // array of blog objects
        } else {
          console.error("No blogs found:", data.error);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8 text-white">Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home allBlogs={allBlogs} />} />
        {/* changed param name to documentId */}
        <Route path="/blog/:documentId" element={<BlogDetail />} />
        <Route path="/blogs/:title" element={<BlogsPage allBlogs={allBlogs} />} />
      </Routes>
    </BrowserRouter>
  );
}
