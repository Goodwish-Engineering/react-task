import useBlog from "../hooks/useBlog";

export default function Sidebar({ handleOpenModal }) {
  const { posts } = useBlog();

  const recentPosts = Array.isArray(posts) ? posts.slice(-5).reverse() : [];

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Recent Posts</h3>
        <div className="flex flex-col gap-3">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="pb-3 border-b border-gray-100 last:border-b-0"
            >
              <a
                onClick={() => handleOpenModal(post.id)}
                className="text-sm text-gray-700 hover:text-blue-600 truncate block cursor-pointer"
                title={post.title}
              >
                {post.title}
              </a>
              <p className="text-xs text-gray-500 mt-1">20XX/XX/XX</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
