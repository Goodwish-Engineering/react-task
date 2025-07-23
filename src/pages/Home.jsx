import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import PostCard from '../components/PostCard';
import LoadingCard from '../components/LoadingCard';
import Sidebar from '../components/Sidebar';
import Pagination from '../components/Pagination';
import blogPosts from '../data/blogPosts.json';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All');
  const postsPerPage = 6;

  const categories = ['All', 'Technology', 'Design', 'Business', 'Science', 'Health'];

  useEffect(() => {
    try {
      setLoading(true);
      setPosts(blogPosts);
    } catch (err) {
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const getUserName = (userId) => {
    const post = posts.find((p) => p.userId === userId);
    return post ? post.author : 'Unknown Author';
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" data-aos="fade-up">
        <div className="text-center">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            handleCategoryChange={handleCategoryChange}
          />
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          <div className="flex-1">
            {!loading && (
              <div className="mb-6">
                <p className="text-gray-600">
                  {searchTerm ? (
                    <>Showing {filteredPosts.length} results for "<span className="font-semibold">{searchTerm}</span>"</>
                  ) : (
                    <>Showing {filteredPosts.length} posts in {activeCategory}</>
                  )}
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {loading ? (
                Array.from({ length: 6 }).map((_, index) => <LoadingCard key={index} />)
              ) : currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    getUserName={getUserName}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12" data-aos="fade-up">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
                  <p className="text-gray-600">
                    {searchTerm ? `No posts match "${searchTerm}". Try a different search term.` : 'No posts available at the moment.'}
                  </p>
                </div>
              )}
            </div>
            {!loading && filteredPosts.length > postsPerPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />
            )}
          </div>
          <Sidebar posts={posts} getUserName={getUserName} />
        </div>
      </div>
    </>
  );
};

export default Home;