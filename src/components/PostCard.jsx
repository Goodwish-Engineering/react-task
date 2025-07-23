import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const PostCard = ({ post }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      data-aos="fade-up"
    >
      <Link to={`/post/${post.id}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-36 sm:h-40 md:h-48 object-cover"
        />
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 line-clamp-2">
            {post.title}
          </h3>
          <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600">
            <User className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="truncate">{post.author}</span>
            <span className="hidden sm:inline">•</span>
            <span className="truncate">{post.date}</span>
          </div>
          <p className="mt-1.5 sm:mt-2 text-gray-700 text-xs sm:text-sm md:text-base line-clamp-2">
            {post.body}
          </p>
          <div className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm text-gray-500">
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;