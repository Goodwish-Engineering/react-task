import { createContext, useEffect, useState } from "react";
import { BlogService } from "../service/BlogService";

const BlogContext = createContext();

export function BlogProvider({ children }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                const data = await BlogService.getAllPosts();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchPosts();
    }, []);

    return (
        <BlogContext.Provider value={{loading, posts, error}}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;