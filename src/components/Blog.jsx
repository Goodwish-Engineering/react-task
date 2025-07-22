import {  useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const Blog = () => {
  const [search, setSearch] = useState("");
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

  return (
    <div className="max-w-7xl mx-auto mt-20" >
    
      <input
        className="border flex  mx-auto w-1/3 lg:w-1/5 h-10 p-5"
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};
