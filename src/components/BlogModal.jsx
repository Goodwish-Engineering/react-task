import { useBlogContext } from "./BlogContext";

const BlogModal = () => {
 const {selectedBlog,setSelectedBlog} = useBlogContext();
  return (
    <div
      className="fixed inset-0 flex items-center justify-center  bg-black/10  backdrop-brightness-50"
      onClick={() => setSelectedBlog(null)}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-8 max-w-lg  relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-3  text-xl"
          onClick={() => setSelectedBlog(null)}
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
        <p className="mb-4">{selectedBlog.body}</p>
        <p className="text-gray-700 text-sm">Post ID: {selectedBlog.id}</p>
      </div>
    </div>
  );
};

export default BlogModal; 