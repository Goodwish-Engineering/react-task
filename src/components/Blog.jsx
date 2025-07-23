import { useState } from "react";
import { useBlogContext } from "./BlogContext";
import BlogModal from "./BlogModal";
import Pagination from "./Pagination";


export const Blog = () => {
  const [search, setSearch] = useState("");
  const {allBlogs,error,isLoading, selectedBlog, setSelectedBlog } = useBlogContext();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data</p>;
  }

  const filteredBlog = allBlogs?.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;       // 1*10 = 10 jaba page load hunxa
  const indexOfFirstPost = indexOfLastPost - postsPerPage;  //10-10 = 0 
  const currentPosts = filteredBlog.slice(indexOfFirstPost, indexOfLastPost);      //slice(0,10)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={`max-w-8xl mx-auto p-10`}>
      <p className="flex justify-center font-bold text-3xl lg:text-4xl mb-3 md:mb-6 lg:mb-10 ">
        Blog Posts
      </p>

      <input
        className="border flex mx-auto w-1/3 lg:w-1/5 h-10 p-5 sm:text-sm rounded-lg"
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {currentPosts.map((item) => (
          <div
            key={item.id}
            className="mb-10 shadow hover:shadow-2xl px-5 py-4 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => setSelectedBlog(item)}
          >
            <p className="mb-5 font-bold text-xl">{item.title}</p>
            <p>{item.body.slice(0, 80)}.....</p>
          </div>
        ))}
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredBlog.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      {selectedBlog && (
        <BlogModal />
      )}
    </div>
  );
};
