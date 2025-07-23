import { useState } from "react";
import { BlogContext } from "./BlogContext";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const BlogProvider = ({ children }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const { data, isLoading, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  const allBlogs = data || [];
  return (
    <BlogContext.Provider
      value={{ selectedBlog, setSelectedBlog, allBlogs, isLoading, error }}
    >
      {children}
    </BlogContext.Provider>
  );
};
