import { X, User, Calendar, Clock } from 'lucide-react';

const PostModal = ({ post, onClose, getUserName }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4" data-aos="zoom-in">
      <div className="bg-white rounded-xl w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex justify-between items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 pr-4 sm:pr-8 capitalize line-clamp-2">
            {post.title}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
          </button>
        </div>
        <div className="p-4 sm:p-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg mb-4 sm:mb-6"
          />
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="truncate">{getUserName(post.userId)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="truncate">{post.date || 'March 2024'}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{post.readTime} min read</span>
            </div>
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
              {post.category}
            </span>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              {post.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;