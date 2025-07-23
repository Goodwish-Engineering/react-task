import { User, ArrowRight } from 'lucide-react';

const Sidebar = ({ posts, getUserName }) => {
  return (
    <aside className="w-80 hidden lg:block" data-aos="fade-left">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Latest Blogs</h3>
        <div className="space-y-4">
          {posts.slice(0, 3).map((post) => (
            <div key={post.id} className="border-b border-gray-100 pb-4 last:border-b-0">
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 capitalize cursor-pointer hover:text-orange-500 transition-colors">
                {post.title}
              </h4>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <User className="w-3 h-3" />
                <span>{getUserName(post.userId)}</span>
              </div>
              <button className="inline-flex items-center gap-1 text-orange-500 text-sm hover:text-orange-600 transition-colors">
                Read now
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;