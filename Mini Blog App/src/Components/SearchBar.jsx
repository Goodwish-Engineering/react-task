import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Search by blog ID..."
          className="w-full px-4 py-2 rounded-full border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-2 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
        >
          <FiSearch className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;