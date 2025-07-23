import { createContext, useEffect, useState } from "react";
import { BlogService } from "../service/BlogService";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const postsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await BlogService.getAllPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const visiblePosts = posts.slice(startIndex, endIndex);

  return (
    <BlogContext.Provider
      value={{
        loading,
        error,
        visiblePosts,
        currentPage,
        totalPages,
        setCurrentPage,
        setLoading,
        posts,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContext;
