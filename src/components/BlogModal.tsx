import { useEffect } from "react";
import { useBlogStore } from "../store/blogStore";
import { fetchAuthor } from "../services/api";
import { LuEye } from "react-icons/lu";
import {
  BsFillHandThumbsDownFill,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

export const BlogModal: React.FC = () => {
  const {
    selectedPost,
    selectedAuthor,
    showModal,
    setSelectedAuthor,
    setShowModal,
  } = useBlogStore();

  useEffect(() => {
    if (selectedPost) {
      const loadAuthor = async () => {
        try {
          const author = await fetchAuthor(selectedPost.userId);
          setSelectedAuthor(author);
        } catch (err) {
          setSelectedAuthor(null);
          console.log(err);
        }
      };
      loadAuthor();
    }
  }, [selectedPost, setSelectedAuthor]);

  if (!showModal || !selectedPost) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white rounded-xl w-full max-w-2xl sm:max-w-lg md:max-w-xl lg:max-w-3xl max-h-[90vh] overflow-y-auto shadow-lg animate-fadeIn"
      >
        <div className="sticky top-0 bg-white border-b px-4 sm:px-6 py-3 flex items-center justify-between z-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Post Details
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
          >
            <RxCross2 />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            {selectedPost.title}
          </h1>

          {selectedAuthor && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
              <img
                src={selectedAuthor.image}
                alt={`${selectedAuthor.firstName} ${selectedAuthor.lastName}`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  {selectedAuthor.firstName} {selectedAuthor.lastName}
                </p>
                <p className="text-sm text-gray-600">{selectedAuthor.email}</p>
              </div>
            </div>
          )}

          <p className="text-gray-700 leading-relaxed text-sm sm:text-md mb-6">
            {selectedPost.body}
          </p>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {selectedPost?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-lg gap-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                <BsFillHandThumbsUpFill />
                <span className="font-semibold">
                  {selectedPost.reactions?.likes || 0}
                </span>
                Likes
              </span>
              <span className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                <BsFillHandThumbsDownFill />
                <span className="font-semibold">
                  {selectedPost.reactions?.dislikes || 0}
                </span>
                Dislikes
              </span>
            </div>
            <span className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <LuEye />
              <span className="font-semibold">{selectedPost.views || 0}</span>
              Views
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
