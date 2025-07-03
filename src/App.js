import "./App.css";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";

function App() {
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
