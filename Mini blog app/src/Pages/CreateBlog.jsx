import React, { useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("Day 1");
  const [description, setDescription] = useState("Done my assignment");
  const [author, setAuthor] = useState("Bibash Basenet")
  return (
    <div className="container-flex d-flex justify-content-center min-vw-100">
      <form className="card p-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author:
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            aria-describedby="emailHelp"
            value={author}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
