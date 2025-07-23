import { useEffect } from "react";
import useBlog from "../hooks/useBlog";
import Loader from "./Loader";

export default function BlogList({ setModal, modal, handleOpenModal }) {
  const { visiblePosts, loading, error } = useBlog();

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setModal(false);
      }
    }

    if (modal) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setModal, modal]);

  if (loading) return <Loader />;

  if (error)
    return (
      <div className="text-center text-red-500 py-16">
        <p>Failed to load posts: {error}</p>
      </div>
    );

  return (
    <>
      <div className="flex flex-col gap-8">
        {visiblePosts.slice(0, 6).map((post) => (
          <article
            onClick={() => handleOpenModal(post.id)}
            key={post.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {post.body.length > 150
                ? `${post.body.slice(0, 150)}...`
                : post.body}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Post #{post.id}</span>
              <span>Read more →</span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
