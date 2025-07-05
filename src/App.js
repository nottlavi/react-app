import "./App.css";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";

function App() {
  const { fetchBlogPost } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPost(Number(page), tag);
    } else if (location.pathname.includes("category")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPost(Number(page), null ,category);
    }
  }, [location.pathname, location.search]);

  return (
    <div className="w-screen h-min-screen flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tags/:tag" element={<TagPage />}></Route>
        <Route path="/categories/:category" element={<CategoryPage />}></Route>
        <Route path="/blog/:blog" element={<BlogPage />}></Route>
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </div>
  );
}

export default App;
