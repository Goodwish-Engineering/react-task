import React, { useContext } from "react";
import { Context } from "../../Context/Context";

const BlogDetail = () => {
  const { blog } = useContext(Context);
  console.log(blog);
  return (
    <div className="container d-flex justify-content-center align-items-center min-vw-100 min-vh-100 ">
      <div className="card w-75 h-100 ">
        <div className="card-body ">
          <p className="card-title">{blog.title}</p>
          <p>{blog.description}</p>
          <i>By {blog.author}</i>
          <p>{blog.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
