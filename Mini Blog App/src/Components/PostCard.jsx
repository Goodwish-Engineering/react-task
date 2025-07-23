import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
 return (
    <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
          <span className="text-indigo-600 font-bold">{post.id}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-800">{post.title}</h3>
      </div>
      <p className="text-slate-600 mb-4">{post.body.slice(0, 100)}...</p>
      <Link
        to={`/posts/${post.id}`}
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
}

export default PostCard;