import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleBlog, fetchAllBlogs } from "../api/blogApi";
import { FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RelatedPostCard from "../components/RelatedPost";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import type { Blog } from "../types";
import { Link } from "react-router-dom";
import BlogDetailsShimmer from "../components/BlogDetailsShimmer";
const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  {
    /* Fetch single post data and also all data to show forr the related posts*/
  }
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        if (id) {
          const blogData = await fetchSingleBlog(id);
          setBlog(blogData);
        }
        const allBlogs = await fetchAllBlogs();
        setBlogs(allBlogs);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || "Failed to fetch blog post");
        } else {
          setError("Failed to fetch blog post");
        }
        setLoading(false);
      }
    };

    getData();
  }, [id]);

  {
    /* exclude current post and take 5 blog randomly */
  }
  const relatedPosts = blogs
    .filter((p) => p.id !== blog?.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  const handleNavigate = (direction: "prev" | "next") => {
    if (!blog) return;
    const currentIndex = blogs.findIndex((p) => p.id === blog.id);
    if (direction === "prev" && currentIndex > 0) {
      navigate(`/blogs/${blogs[currentIndex - 1].id}`);
    } else if (direction === "next" && currentIndex < blogs.length - 1) {
      navigate(`/blogs/${blogs[currentIndex + 1].id}`);
    }
  };

  if (loading) {
    return <BlogDetailsShimmer />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500 text-xl">Post not found</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="mt-4 mx-auto px-4 lg:px-8 w-full lg:w-4/5 space-y-2 text-gray-600">
        <p className="">
          <span className="underline hover:text-blue-600 cursor-pointer">
            <Link to={"/"}>Home</Link>
          </span>
          <span>/blogs/{`${blog.id}`}</span>
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 mt-4">
          Blog Details
        </h2>
      </div>
      {/* Blog Image */}
      <div className="w-full lg:w-4/5 mx-auto h-[60vh] overflow-hidden px-4 lg:px-8">
        <img
          src="/imageBlog.jpg"
          alt="Blog Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content part */}
      <div className="w-full lg:w-4/5 mx-auto flex flex-col lg:flex-row mb-16 mt-6">
        <div className="w-full lg:w-2/3 bg-white rounded-l-sm relative">
          <div className="px-4 lg:px-8 space-y-6">
            <h3 className="text-xl md:text-2xl font-medium text-gray-800">
              {blog.title.toUpperCase()}
            </h3>

            <p className="text-gray-500">
              Posted by{" "}
              <span className="text-gray-800 font-medium">
                User {blog.userId}
              </span>
            </p>

            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-gray-800 text-xs px-2 py-1 rounded"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <article className="prose lg:prose-xl max-w-none text-gray-700">
              {blog.body}
            </article>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-green-600">
                  <BiSolidLike size={20} className="text-xl" />
                  <span>{blog.reactions.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <BiSolidDislike size={20} className="text-xl" />
                  <span>{blog.reactions.dislikes}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-blue-600">
                <FaEye className="text-xl" />
                <span>{blog.views || 0} Views</span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="sticky top-[100vh] px-8 pt-4 bg-white border-t border-gray-200">
            <div className="flex justify-between">
              <button
                onClick={() => handleNavigate("prev")}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition"
              >
                <FaArrowLeft />
                Previous Post
              </button>
              <button
                onClick={() => handleNavigate("next")}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition"
              >
                Next Post
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts Sidebar */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white lg:border-l border-gray-300 px-8 pt-8 rounded-r-sm sticky top-8 h-fit">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Related Posts
            </h2>
            <div className="space-y-6">
              {relatedPosts.map((relatedPost) => (
                <RelatedPostCard key={relatedPost.id} blog={relatedPost} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetails;
