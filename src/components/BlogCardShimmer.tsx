// components/BlogCardShimmer.tsx
const BlogCardShimmer = () => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden flex flex-col animate-pulse">
      <div className="h-50 bg-gray-300 overflow-hidden"></div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>
        <div className="space-y-2 mb-4 flex-grow">
          <div className="h-8 bg-gray-300 rounded w-full"></div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 bg-gray-300 rounded-full w-16"></div>
          <div className="h-6 bg-gray-300 rounded-full w-12"></div>
          <div className="h-6 bg-gray-300 rounded-full w-14"></div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-300 pt-3">
          <div className="flex items-center space-x-4">
            <div className="h-5 bg-gray-300 rounded w-8"></div>
            <div className="h-5 bg-gray-300 rounded w-8"></div>
          </div>
          <div className="h-4 bg-gray-300 rounded w-12"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardShimmer;
