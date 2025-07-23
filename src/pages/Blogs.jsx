import { useState } from "react";
import BlogCard from "../components/BlogCard";
import "../styles/blogs.css";
import useFetch from "./../hooks/useFetch";
import SearchInput from "../components/SearchInput";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  );

  //filtering according to title
  const filteredData = data?.filter((blog) =>
    blog?.title?.includes(searchQuery)
  );

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <section className="blogs_section">
      <h1 className="section_title">Latest Blogs</h1>
      <SearchInput setSearchQuery={setSearchQuery} />
      <div className="blogs_grid">
        {filteredData && filteredData.length > 0 ? (
          filteredData?.map((blog) => <BlogCard key={blog?.id} blog={blog} />)
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </section>
  );
};

export default Home;
