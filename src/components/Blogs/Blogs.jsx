import React from "react";
import "./Blogs.css";
import blogs from "../../data/blogs.json";
import Blog from "./Blog/Blog";
const Blogs = () => {
  return (
    <div className="blogs-container container">
      <h3 className="caption">PUBLISH WHAT YOU THINK</h3>
      <h2 className="header">LATEST BLOGS</h2>
      <div className="blog-list">
        {blogs.map((item, index) => {
          return <Blog item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
