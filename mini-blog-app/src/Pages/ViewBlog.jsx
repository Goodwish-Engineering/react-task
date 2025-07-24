import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ViewBlog = () => {
  const { setBlog } = useContext(Context);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const api = import.meta.env.VITE_API;

  const handleClick = (item) => {
    console.log("Button is clicked");
    setBlog(item);
    navigate("/detail");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${api}/blog/get`);
        if (res) {
          setData(res.data);
        }
      } catch (e) {
        alert(e?.respnose?.data?.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
    setFiltered(
      data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
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
              <h4>{item.title}</h4>
              <h7>Created At: {item.createdAt}</h7>
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
