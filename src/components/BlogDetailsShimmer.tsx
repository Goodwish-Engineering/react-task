// components/BlogDetailsShimmer.tsx
const BlogDetailsShimmer = () => {
  return (
    <main className="min-h-screen">
      <div className="mt-4 mx-auto  w-full lg:w-4/5 space-y-2">
        <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3"></div>
        <div className="h-8 bg-gray-200 animate-pulse rounded w-1/4 mb-8"></div>
      </div>

      <div className="w-full lg:w-4/5 mx-auto h-[60vh] bg-gray-200 animate-pulse"></div>

      <div className="w-full lg:w-4/5 mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 bg-white p-4 lg:p-8">
          <div className="h-[500px] bg-gray-100 animate-pulse rounded"></div>
        </div>

        <div className="w-full lg:w-1/3 bg-white p-4 lg:p-8">
          <div className="h-[500px] bg-gray-100 animate-pulse rounded"></div>
        </div>
     </div>
    </main>
  );
};

export default BlogDetailsShimmer;
