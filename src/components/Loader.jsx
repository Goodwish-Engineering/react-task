export default function Loader() {
  return (
    <div className="flex flex-col gap-8">
      {[...Array(2)].map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <div className="h-5 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>

          <div className="space-y-2 mb-4">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
