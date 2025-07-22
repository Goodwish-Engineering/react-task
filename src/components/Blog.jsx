import { useState,} from "react";
import { useBlogContext } from "./BlogContext";
import useSWR from "swr";
import BlogModal from "./BlogModal";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const Blog = () => {
  const [search, setSearch] = useState("");
  const { selectedBlog, setSelectedBlog } = useBlogContext();
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data</p>;
  }

  const filteredBlog = data.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`max-w-8xl mx-auto  p-10`}>
      <p className="flex justify-center font-bold text-3xl lg:text-4xl mb-3 md:mb-6 lg:mb-10 ">
        Blog Posts
      </p>
     
      <input
        className="border flex mx-auto w-1/3 lg:w-1/5 h-10 p-5 sm:text-sm"
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {filteredBlog.map((blog) => (
          <div
            key={blog.id}
            className="mb-10 shadow hover:shadow-2xl px-5 py-4 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => setSelectedBlog(blog)}
          >
            <p className="mb-5 font-bold text-xl">{blog.title}</p>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
      {selectedBlog && 
       <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      }
     
    </div>
  );
};
