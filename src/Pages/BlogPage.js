import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import BlogDetails from "../Components/BlogDetails";
import Pagination from "../Components/Pagination";

export const BlogPage = () => {
  const location = useLocation();
  const blogId = location.pathname.split("/").at(-1);
  console.log(blogId);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState("");
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const { loading, setLoading } = useContext(AppContext);

  async function fetchBlogPost() {
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const data = await fetch(url);
      const result = await data.json();
      setBlog(result.blog);
      setRelatedBlogs(result.relatedBlogs);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (blogId) {
      fetchBlogPost();
    }
  }, [location.pathname]);

  console.log(relatedBlogs);
  console.log(blog);

  return (
    <div className="flex w-full justify-center">
      <Header />
      <div className="flex flex-col gap-10">
        <BlogDetails post={blog} />
        <p className="font-extrabold font-300"> guguu </p>
        {relatedBlogs.map((post) => (
          <div>
            <BlogDetails post={post} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default BlogPage;
