import {useState} from 'react';
import { BlogContext } from './BlogContext';

export const BlogProvider = ({ children }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  return (
    <BlogContext.Provider value={{ selectedBlog, setSelectedBlog }}>
      {children}
    </BlogContext.Provider>
  );
};