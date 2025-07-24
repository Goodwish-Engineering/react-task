import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import axios from "axios";

const EditBlog = () => {
  const { setBlog } = useContext(Context);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const api = import.meta.env.VITE_API;
  const id = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${api}/blog/findByid/${id}`);
        if (res) {
          setData(res.data);
        }
      } catch (e) {
        alert(e?.response?.data?.maessage);
      }
    };
    fetchData();
  }, []);

  const handleClick = async (item) => {
    console.log(item);
    try {
      const res = await axios.delete(`${api}/blog/delete/${item._id}`);
      if (res) {
        alert(res.data.message);
      }
    } catch (e) {
      alert(e?.response?.data?.message);
    }
  };
  return (
    <div className="container-fluid min-vw-100 align-items-center pt-5">
      <div className="container d-flex flex-column align-items-center mt-5 ">
        {data.map((item, i) => (
          <div className="card w-50 mb-3" key={i}>
            <div className="card-body ">
              <h4>{item.title}</h4>
              <h7>Created At: {item.createdAt}</h7>
              <h6>
                <i>By {item.author}</i>
              </h6>
              <button
                type="button"
                className="btn btn-primary "
                onClick={() => handleClick(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditBlog;
