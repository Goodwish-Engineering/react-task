const LoadingCard = () => {
  return (
    
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse" data-aos="fade-up">
        <div className="h-48 bg-gray-200"></div>
        <div className="p-6">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-8 bg-gray-200 rounded w-20"></div>
          </div>
        </div>
      </div>
  );
};

export default LoadingCard;