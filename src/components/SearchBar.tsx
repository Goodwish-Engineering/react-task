import type React from "react";
import { IoIosSearch } from "react-icons/io";
import { useBlogStore } from "../store/blogStore";

const SearchBar: React.FC = () => {
  const searchInput = useBlogStore((state) => state.searchTerm);
  const setSearchInput = useBlogStore((state) => state.setSearchTerm);

  return (
    <div className="relative max-w-md  sm:w-auto">
      <div className="absolute inset-y-0 left-0 pl-1 flex items-center">
        <IoIosSearch size={18} className="text-gray-500 mt-0.5" />
      </div>

      <input
        type="text"
        placeholder="Search blogs..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full block pl-6 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none "
      />
    </div>
  );
};

export default SearchBar;
