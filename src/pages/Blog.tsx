import { useParams } from "react-router-dom";
import { useFetchBlogById } from "../services/blogApi";

const Blog = () => {
  const { id } = useParams<{ id: string }>();

  const blogId = id ? parseInt(id, 10) : 0;
  const { data: blog, isLoading, error } = useFetchBlogById(blogId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-700">Loading blog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">
          Failed to load blog: {error.message}
        </p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      <article className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-md rounded-lg mt-4">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">{blog.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{blog.body}</p>
      </article>
    </div>
  );
};

export default Blog;
