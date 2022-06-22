import React from "react";
import "./Blog.css";
const Blog = ({ item }) => {
  return (
    <div className="blog-card">
      <div className="blog-img">
        <img src={item.image} alt="" />
      </div>
      <div className="blog-about">
        <p className="desc-small desc">
          {item.date} | BY {item.author}
        </p>
        <p className="desc desc-title">{item.title}</p>
        <p className="desc desc-content">{item.content}</p>
      </div>
    </div>
  );
};

export default Blog;
