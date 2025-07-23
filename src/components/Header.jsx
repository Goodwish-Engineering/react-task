import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import useBlog from "../hooks/useBlog";
import SearchPortal from "./SearchPortal";

export default function Header({ handleOpenModal }) {
  const { posts } = useBlog();
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered([]);
      setShowResults(false);
      return;
    }

    const match = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );

    setFiltered(match);
    setShowResults(true);
  }, [search, posts]);

  const handleResultSelect = (itemId) => {
    setShowResults(false);
    setSearch("");

    if (typeof handleOpenModal === "function") {
      handleOpenModal(itemId);
    } else {
      console.error("handleOpenModal is not a function");
    }
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">TechBlog</h1>
            <div className="flex items-center gap-1 text-sm text-gray-700 mt-2">
              <p>You can use</p>
              <div className="flex gap-2">
                <kbd className="px-1.5 py-0.5 bg-black text-white rounded">
                  <ArrowLeft size={18} />
                </kbd>
                <kbd className="px-1.5 py-0.5 bg-black text-white rounded">
                  <ArrowRight size={18} />
                </kbd>
              </div>
              <p>(arrow keys) for navigation</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-between sm:justify-end">
            <div className="relative w-full sm:w-auto">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <SearchPortal
                isOpen={showResults}
                results={filtered}
                onClose={() => {
                  setShowResults(false);
                  setSearch("");
                }}
                onSelect={handleResultSelect}
              />
            </div>

            <div className="hidden sm:flex items-center gap-2 text-gray-500 text-sm">
              <ArrowLeft size={16} />
              <ArrowRight size={16} />
              <span>Navigate</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
