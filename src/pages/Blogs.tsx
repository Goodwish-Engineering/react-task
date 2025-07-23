import React, { useState, useEffect } from "react";
import { BlogList } from "../components/BlogList";
import { BlogModal } from "../components/BlogModal";
import SearchBar from "../components/SearchBar";

const Blogs: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    setCategories([
      "All",
      "history",
      "american",
      "crime",
      "french",
      "fiction",
      "english",
      "magical",
      "love",
      "mystery",
    ]);
  }, []);
  return (
    <div className="mx-auto max-w-6xl">
      <div className="bg-blue flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 sm:px-6 md:px-8 mt-6 gap-4">
        <div className="text-center lg:text-left">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            Where every wish finds its words.
          </h1>
          <p className="text-md sm:text-xl lg:text-xl text-gray-600 mt-1">
            From tech talk to life tales, your blog belongs here.{" "}
          </p>
        </div>

        {/* Right Section: SearchBar */}
        <div className="w-[80%] mx-auto sm:mx-auto md:mx-auto lg:mx-1 sm:w-[60%] md:w-[60%] lg:w-[30%]">
          <SearchBar />
        </div>
      </div>

      <div className="flex my-6 gap-4">
        {/* Categories on the left */}
        <div className="hidden lg:block w-44  p-4 rounded shadow-sm sticky top-20 h-fit">
          <h2 className="font-semibold mb-3 text-gray-700">Categories</h2>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer mb-2 px-3 py-1 border-b border-gray-200 rounded ${
                  selectedCategory === cat
                    ? "bg-blue-500/50 text-white"
                    : "hover:bg-blue-100"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <BlogList selectedCategory={selectedCategory} />
          <BlogModal />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
