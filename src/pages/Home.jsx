import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import BlogCard from '../components/BLogCard';
import Loader from './Loader';
import Pagination from '../components/Pagination';
import '../App.css';

const POSTS_PER_PAGE = 10;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const today=new Date().toDateString();
  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  if (loading) return <Loader />;

  return (
    <div className="home">
      <h2 className='title'>Blogs</h2>
      <p className='today'>{today}</p>
      <div className="grid">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
