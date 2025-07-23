import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${id}`)
      .then(res => {
        setPost(res.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-slate-600">Loading post content...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mb-8 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <span className="text-indigo-700 font-bold text-lg">{post.id}</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">{post.title}</h2>
          </div>
          
          <div className="prose prose-indigo max-w-none text-slate-700">
            <p className="text-lg">{post.body}</p>
            <p className="text-lg mt-4">{post.body}</p>
          </div>
          
          <div className="mt-10 pt-6 border-t border-indigo-100 flex justify-end">
            <Link 
              to="/" 
              className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Browse More Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;