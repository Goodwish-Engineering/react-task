
import { BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { useBlogStore } from "../store/blogStore";
import type { Post } from "../types/blog";
import { LuEye } from "react-icons/lu";


interface PostCardProps {
  post: Post;
  index: number;
}

const BlogCard: React.FC<PostCardProps> = ({ post, index }) => {
  const setSelectedPost = useBlogStore((state) => state.setSelectedPost);
  const setShowModal = useBlogStore((state) => state.setShowModal);

  const openPostModal = () => {
    setSelectedPost(post);
    setShowModal(true);
  };

  return (
    <div
      className="bg-white w- rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 px-2 py-4"
      onClick={openPostModal}
      style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-1">
        {post.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post?.tags?.slice(0, 3).map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <BsFillHandThumbsUpFill />
            {post.reactions?.likes || 0}
          </span>
          <span className="flex items-center gap-1">
            <BsFillHandThumbsDownFill />
            {post.reactions?.dislikes || 0}
          </span>
        </div>
        <span className="flex items-center gap-1">
          <LuEye />
          {post.views || 0}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
