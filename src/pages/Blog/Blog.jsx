import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogList } from "../../config/data";
import Chip from "../../components/Common/Chip/Chip";
import EmptyList from "../../components/Common/EmptyList/EmptyList";

import "./Blog.css";
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <div>
      <Link className="blog-goBack" to="/">
        <span>Go Back</span>
      </Link>

      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-data">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, index) => (
                <div>
                  <Chip key={index} label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desk">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;
