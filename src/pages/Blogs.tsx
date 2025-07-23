import { useFetchBlogs } from "../services/blogApi";
import BlogCard from "../components/blogs/blogCard";
import { useBlogStore } from "../store/blogStore";

const Blogs = () => {
  const { data: res, isLoading, error } = useFetchBlogs();
  const blogs = res || [];
  const { setPage, page } = useBlogStore();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 py-8 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        All Blogs
      </h1>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
      </div>
      <div className="flex justify-end gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`py-2 px-4 rounded-md font-semibold transition-colors duration-200
      ${
        page === 1
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      }`}
        >
          Previous
        </button>

        <button
          disabled={page === 10}
          onClick={() => setPage(page + 1)}
          className={`py-2 px-4 rounded-md font-semibold transition-colors duration-200
      ${
        page === 10
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
