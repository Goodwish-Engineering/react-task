import { Link } from "react-router-dom";
import type { Blog } from "../types";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
interface RelatedPostCardProps {
  blog: Blog;
}

const RelatedPostCard = ({ blog }: RelatedPostCardProps) => {
  return (
    <Link
      to={`/blogs/${blog.id}`}
      className="flex gap-3 hover:bg-gray-50  rounded transition"
    >
      <div className="w-24 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
        <img
          src="/imageBlog.jpg"
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-medium text-gray-800 line-clamp-2 text-sm leading-tight">
            {blog.title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Posted by{" "}
            <span className="font-medium text-gray-800">
              {" "}
              User {blog.userId}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1 text-green-600">
            <BiSolidLike size={20} className="text-xs" />
            <span className="text-xs">{blog.reactions.likes}</span>
          </div>
          <div className="flex items-center gap-1 text-red-600">
            <BiSolidDislike size={20} className="text-xs" />
            <span className="text-xs">{blog.reactions.dislikes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RelatedPostCard;
