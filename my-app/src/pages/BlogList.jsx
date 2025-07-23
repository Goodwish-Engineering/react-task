import React, { useEffect, useState } from 'react';
import BlogItem from "../component/BlogItem";
import "../styles/BlogList.css";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = () => {
    setLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Blog List</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {loading && <p>Loading posts...</p>}
      {error && <p className="error">{error}</p>}

      <div className="blog-list">
        {!loading && !error && posts.map((post) => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
