import React, { useEffect, useState } from 'react';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

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
        console.log('Posts fetched:', data); 
        setPosts(data);                      
        setLoading(false);                  
      })
      .catch((err) => {
        console.error('Error:', err.message);
        setError(err.message);              
        setLoading(false);                   
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      {posts.map((post) => (
  <div key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
))}
      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default BlogList;
