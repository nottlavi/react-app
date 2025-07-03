import React, { useState, createContext } from "react";
import { baseUrl } from "../baseUrl";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();

  async function fetchBlogPost(page = 1, tag = null, category=null) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&categories=${category}`;
    }
    try {
      const result = await fetch(url);
      const data = await result.json();

      setPage(data?.page);
      setPosts(data?.posts);
      setTotalPages(data?.totalPages);
    } catch (e) {
      console.log("Error fetching blog posts:", e);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  const pageHandler = (page) => {
   
    setPage(page);
  }

  useEffect(() => {
    fetchBlogPost();
  }, []);

  const value = {
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    loading,
    setLoading,
    pageHandler,
    fetchBlogPost,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
