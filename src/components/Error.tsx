import React from "react";

const Error: React.FC = ({
  message = "No Blogs Found. Try Searching with another terms...",
}: {
  message?: string;
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="text-red-500 text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{message} </h2>
        <p className="text-gray-600 mb-4">Try Adjusting your Search terms</p>
      </div>
    </div>
  );
};

export default Error;
