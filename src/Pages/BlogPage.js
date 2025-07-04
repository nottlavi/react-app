import React, { useContext, useState } from "react";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export const BlogPage = () => {
  const location = useLocation();
  const blogId = location.pathname.split("/").at(-1);
  console.log(blogId);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState("");
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const {loading, setLoading} = useContext(AppContext);

  async function fetchBlogPost() {
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      setLoading(true);
      const data = await fetch(url);
      const result = await data.json();
      setBlog(result.blog);
      setRelatedBlogs(result.relatedBlogs);
    } catch (e) {
      console.log(e);
    }
  }
  console.log(blog);
  console.log(relatedBlogs);

  return (
    <div className="flex w-full justify-center">
      <Header />
    </div>
  );
};

export default BlogPage;
