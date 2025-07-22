const BlogModal = ({ blog, onClose }) => {
 
  return (
    <div
      className="fixed inset-0 flex items-center justify-center  bg-black/10  backdrop-brightness-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-8 max-w-lg  relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-3  text-xl"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
        <p className="mb-4">{blog.body}</p>
        <p className="text-gray-700 text-sm">Post ID: {blog.id}</p>
      </div>
    </div>
  );
};

export default BlogModal; 