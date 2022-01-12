import React from "react";
import BlogItem from "./BLogItem/BlogItem";
import "./BlogList.css";

const BlogList = ({ blogs }) => (
  <div className="blogList-wrap">
    {blogs.map((blog) => (
      <BlogItem blog={blog} key={blog.id} />
    ))}
  </div>
);

export default BlogList;
