import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const ViewBlog = () => {
  const { setBlog } = useContext(Context);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const [data, setData] = useState([
    {
      id: "1",
      titile: "title2",
      description: "This is the first description",
      author: "Bibash",
    },
    {
      id: "2",
      titile: "title1",
      description: "This is the first description",
      author: "Basnet",
    },
    {
      id: "3",
      titile: "title1",
      description: "This is the first description",
      author: "Dark soul",
    },
    {
      id: "1",
      titile: "title1",
      description: "This is the first description",
      author: "Bibash",
    },
    {
      id: "2",
      titile: "title1",
      description: "This is the first description",
      author: "Basnet",
    },
    {
      id: "3",
      titile: "title1",
      description: "This is the first description",
      author: "Dark soul",
    },
    {
      id: "1",
      titile: "title1",
      description: "This is the first description",
      author: "Bibash",
    },
    {
      id: "2",
      titile: "title1",
      description: "This is the first description",
      author: "Basnet",
    },
    {
      id: "3",
      titile: "title1",
      description: "This is the first description",
      author: "Dark soul",
    },
    {
      id: "1",
      titile: "title1",
      description: "This is the first description",
      author: "Bibash",
    },
    {
      id: "2",
      titile: "title1",
      description: "This is the first description",
      author: "Basnet",
    },
    {
      id: "3",
      titile: "title1",
      description: "This is the first description",
      author: "Dark soul",
    },
  ]);
  const [filtered, setFiltered] = useState(data);
  const handleClick = (item) => {
    console.log("Button is clicked");
    setBlog(item);
    navigate("/detail");
  };

  useEffect(() => {
    setFiltered(
      data.filter((item) =>
        item.titile.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, data]);
  return (
    <div className="container-fluid min-vw-100 align-items-center pt-5">
      <input
        className="container d-flex align-items-center mt-5 w-50 fixed-top"
        type="text"
        value={query}
        placeholder="Search by Title"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="container d-flex flex-column align-items-center mt-5 ">
        {filtered.map((item, i) => (
          <div
            className="card w-50 mb-3"
            onClick={() => handleClick(item)}
            key={i}
          >
            <div className="card-body ">
              <h4>{item.titile}</h4>
              <h6>
                <i>By {item.author}</i>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBlog;
