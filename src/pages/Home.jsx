import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import BlogCard from '../components/BlogCard';
import Loader from './Loader';
import Pagination from '../components/Pagination';
import '../App.css';

const POSTS_PER_PAGE = 10;

export default function Home({ searchTerm }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  if (loading) return <Loader />;

  return (
    <div className="home">
      <h2 className="title">Blogs</h2>
      <p className="today">{new Date().toDateString()}</p>
      <div className="grid">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        ) : (
          <p className="no-results">No matching posts found.</p>
        )}
      </div>
      {filteredPosts.length > POSTS_PER_PAGE && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
