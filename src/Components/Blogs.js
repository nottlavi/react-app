import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";
import { useLocation } from "react-router-dom";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  
  
  return (
    <div className="max-w-[620px] w-11/12 mt-[100px] flex flex-col gap-6 mb-40 h-min-screen">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div><p>no post found </p></div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post}/> 
        ))
      )}
    </div>
  );
};

export default Blogs;
