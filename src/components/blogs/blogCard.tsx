import { Link } from "react-router-dom";
import type { BlogPost } from "../../types/blogs.type";

interface BlogProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogProps> = ({ blog }) => {
  return (
    <div className="flex">
      <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 h-full">
        <Link to={`/blogs/${blog.id}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 hover:text-blue-800 transition-colors text-center mb-2">
            {blog.title}
          </h2>
        </Link>
        <p className="text-gray-700 text-base sm:text-lg text-justify leading-relaxed">
          {blog.body.slice(0, 100)}...
        </p>
        <div className="text-right mt-auto">
          <Link
            to={`/blogs/${blog.id}`}
            className="text-sm text-blue-500 hover:text-blue-700 font-semibold"
          >
            Read more →
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
