import { useEffect } from "react";
import { useBlogStore } from "../store/blogStore";
import { fetchPosts } from "../services/api";
import BlogCard from "./BlogCard";
import { Pagination } from "./Pagination";
import Error from "./Error";
import Loading from "./Loading";

interface BlogListProps {
  selectedCategory: string;
}

export const BlogList: React.FC<BlogListProps> = ({ selectedCategory }) => {
  const {
    posts,
    searchTerm,
    currentPage,
    setPosts,
    setLoading,
    setError,
    loading,
    error,
  } = useBlogStore();

  // Fetch posts on first render
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (err) {
        console.error(err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (posts.length === 0) {
      loadPosts();
    }
  }, [setPosts, setLoading, setError, posts.length]);

  //  Apply category + searchTerm filtering together
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" ||
      post?.tags?.includes(selectedCategory.toLowerCase());

    const matchesSearch =
      searchTerm.trim() === "" ||
      post?.title?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const postsPerPage = 12;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {loading && (
        <Loading />
      )}

      {error && <Error message={error} />}

      {/* Search result info */}
      {!loading && !error && (
        <div className="mb-6">
          <p className="text-gray-600">
            {searchTerm
              ? `Found ${filteredPosts.length} posts for "${searchTerm}"`
              : `Showing ${filteredPosts.length} posts`}
          </p>
        </div>
      )}

      {/* No Posts */}
      {!loading && !error && currentPosts.length === 0 ? (
        <Error message="No posts found matching your criteria." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {!loading && !error && filteredPosts.length > postsPerPage && (
        <Pagination
          totalPosts={filteredPosts.length}
          postsPerPage={postsPerPage}
        />
      )}
    </main>
  );
};
