import type { Blog } from "../types";
import { Link } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link to={`/blogs/${blog.id}`}>
      <div className="bg-gray-100 shadow-lg rounded-lg hover:shadow-2xl overflow-hidden transition-shadow duration-300 flex flex-col group">
        {/* Image container parts*/}
        <div className="h-50 bg-gray-200 overflow-hidden relative">
          <img
            src="/imageBlog.jpg"
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-medium text-lg px-4 py-2">
              CLICK TO READ FULL BLOG
            </span>
          </div>
        </div>

        {/* Card details parts */}
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
            {blog.title}
          </h2>
          <p className="text-gray-700 mb-4 line-clamp-2 flex-grow">
            {blog.body}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-gray-800 text-xs rounded-sm"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-gray-300 pt-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-green-600">
                <BiSolidLike size={20} className="mr-1" />
                <span>{blog.reactions.likes}</span>
              </div>
              <div className="flex items-center text-red-600">
                <BiSolidDislike size={20} className="mr-1" />
                <span>{blog.reactions.dislikes}</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">{blog.views} views</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
