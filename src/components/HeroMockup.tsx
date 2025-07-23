import React from "react";

const Mockup: React.FC = () => {
  return (
    <div>
      <div>
        <div className="relative max-w-6xl my-10 mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-gray-100 rounded"></div>
                  <div className="h-20 bg-gray-100 rounded"></div>
                  <div className="h-20 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Mockup;
