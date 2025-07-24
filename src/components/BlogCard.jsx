import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="border p-3 mb-3">
      <h2 className="text-xl">{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}`} className="text-blue-400">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
