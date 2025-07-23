import { useState } from "react";
import { useBlogStore } from "../../store/blogStore";
import { Link } from "react-router-dom";


const Header = () => {
  const [search, setSearchBlog] = useState<string>('');
  const setSearch = useBlogStore(state=> state.setSearch);

  setSearch(search)

  return (
    <header className="flex items-center justify-between p-6 w-full bg-gray-200 sticky z-50 top-0 left-0">
      {/* logo and name */}
      <div className="flex gap-4 items-center">
        <Link to="/" className="flex gap-4 items-center">
        <p>Logo</p>
        <h2 className="text-2xl font-bold text-red-500">Blog App</h2></Link>
        
      </div>

      
      <div className="flex items-center justify-center relative">
         <input
         type="text"
         placeholder="search blog..."
         value={search}
         onChange= {(e) => setSearchBlog(e.target.value)}
         className="bg-white py-1.5 px-6 rounded-md active:outline-none active:ring-0"
         />
      </div>
    </header>
  );
};

export default Header;
