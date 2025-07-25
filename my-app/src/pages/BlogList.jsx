import React, { useEffect, useState } from 'react';
import BlogItem from "../component/BlogItem";
import "../styles/BlogList.css";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const navigate = useNavigate();

  const fetchPosts = () => {
    setLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch posts');
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


  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedPosts = filteredPosts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Blog List</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to page 1 when searching
            }}
          />
        </div>
      </div>

      {loading && <p>Loading posts...</p>}
      {error && <p className="error">{error}</p>}

      <div className="blog-list">
        {!loading && !error &&
          selectedPosts.map((post) => (
            <BlogItem
              key={post.id}
              post={post}
              onReadMore={() => navigate(`/blog/${post.id}`)}
            />
          ))}
      </div>

      {/* Pagination Controls */}
      {!loading && !error && filteredPosts.length > itemsPerPage && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={startIndex + itemsPerPage >= filteredPosts.length}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
