import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="mb-8 flex justify-center" data-aos="fade-up" data-aos-delay="100">
      <div className="relative max-w-md w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
        />
      </div>
    </div>
  );
};

export default SearchBar;