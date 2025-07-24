import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="border p-3 mb-3">
      <h2 className="text-xl text-zinc-900 font-bold">{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}`} className="text-white">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
