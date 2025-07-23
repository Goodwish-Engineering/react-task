import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className=" text-center">
        <div className="animate-spin rounded-full relative h-12 w-12 border-b-3 border-blue-600 mx-auto mb-4">
          {/* <div className="animate-ping rounded-full h-6 w-6 absolute top-3 left-3 border-2 border-blue-500 mx-auto "></div> */}
        </div>
        <p className="text-gray-800 text-lg">Loading Blog Posts</p>
      </div>
    </div>
  );
}

export default Loading