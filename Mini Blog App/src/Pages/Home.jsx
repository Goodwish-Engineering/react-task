import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../Components/PostCard.jsx';
import SearchBar from '../Components/SearchBar.jsx';

function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // using the blog api from https://dummyjson.com/posts
  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
      .then(res => {
        setPosts(res.data.posts);
        setFilteredPosts(res.data.posts);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  //adding the search functionality so that user can search either from post number or title
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredPosts(posts);
      setSearchPerformed(false);
      return;
    }
// Logic to filter posts based on searched number
    const postId = parseInt(searchTerm);
    if (!isNaN(postId)) {
      const foundPost = posts.find(post => post.id === postId);
      setFilteredPosts(foundPost ? [foundPost] : []);
      setSearchPerformed(true);
    } else
      // Logic to filter posts based on searched number
      {
      const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
      setSearchPerformed(true);
    }
  };
  // function to reset the search bar
  const resetSearch = () => {
    setFilteredPosts(posts);
    setSearchPerformed(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Mini Blog
          </h1>
          <SearchBar onSearch={handleSearch} />
          {searchPerformed && (
            <button
              onClick={resetSearch}
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-md mb-6"
            >
              Show All Posts
            </button>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <>
            {filteredPosts.length === 0 && searchPerformed ? (
              <div className="text-center py-10">
                <p className="text-lg text-slate-600">No posts found matching your search</p>
                <button
                  onClick={resetSearch}
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-md"
                >
                  Show All Posts
                </button>
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;