import { useState, useEffect, useMemo } from "react";
import { fetchAllBlogs } from "./api/blogApi";
import BlogCard from "./components/BlogCard";
import BlogCardShimmer from "./components/BlogCardShimmer";
import Pagination from "./components/Pagination";
import TagFilter from "./components/TagFilter";
import "./App.css";
import type { Blog } from "./types";

const BLOG_PER_PAGE = 6;

const App = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchAllBlogs();
        setBlogs(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch posts");
        setLoading(false);
        console.error(err);
      }
    };

    getData();
  }, []);

  {
    /** getting all tags  */
  }
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogs.forEach((blog) => {
      blog.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    if (selectedTags.length === 0) return blogs;
    return blogs.filter((blog) =>
      selectedTags.every((tag) => blog.tags.includes(tag))
    );
  }, [blogs, selectedTags]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };
  {
    /*pagination  in filtered blogs */
  }
  const totalPages = Math.ceil(filteredBlogs.length / BLOG_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOG_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + BLOG_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          Blog Posts
        </h1>
        <TagFilter
          tags={allTags}
          selectedTags={selectedTags}
          onTagClick={handleTagClick}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
          {/*
          if loading state then display 6 card shimmers
          */}
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <BlogCardShimmer key={`shimmer-${index}`} />
              ))
            : currentBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
        </div>
        {!loading && filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blogs match all the selected tags.
            </p>
          </div>
        )}

        {filteredBlogs.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            blogsPerPage={BLOG_PER_PAGE}
            totalBlogs={filteredBlogs.length}
          />
        )}
      </div>
    </div>
  );
};

export default App;
