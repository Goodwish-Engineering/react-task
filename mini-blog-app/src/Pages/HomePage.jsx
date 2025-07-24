import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()
  return (
    <div className="container-fluid d-flex flex-column align-items-center min-vw-100">
      <h1 className="display-4">Welcome to OpenBlog</h1>
      <p className="lead">
        Your space to share thoughts, stories, and ideas — freely and openly.
      </p>
      <div className="mt-4">
        <button
          className="btn btn-primary me-3"
          onClick={() => navigate("/create")}
        >
          Create Blog
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/view")}
        >
          View Blogs
        </button>
      </div>
    </div>
  );
};

export default HomePage;
