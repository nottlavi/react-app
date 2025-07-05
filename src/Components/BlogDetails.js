// src/Components/BlogDetails.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetails = ({ post }) => {
  return (
    <div className="blog-details">
      {post && (
        <>
          <NavLink to={`/blog/${post.id}`}>
            <p className="title">{post.title}</p>
          </NavLink>
          <p className="author-info">
            By <span>{post.author}</span> on{' '}
            <NavLink to={`/categories/${post.category.replaceAll(' ', '-')}`}>
              <span>{post.category}</span>
            </NavLink>
          </p>
          <p className="post-date">Posted on {post.date}</p>
          <p className="post-content">{post.content}</p>
          <div className="tags">
            {post.tags &&
              post.tags.map((tag, index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll(' ', '-')}`}>
                  <span>#{tag}</span>
                </NavLink>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogDetails;