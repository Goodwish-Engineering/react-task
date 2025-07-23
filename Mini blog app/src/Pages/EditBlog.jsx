import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";

const EditBlog = () => {
  const { setBlog } = useContext(Context);
  const navigate = useNavigate();
  const [data, setData] = useState([
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
  const handleClick = async (item) => {
    console.log("Button clicked.")
  }
  return (
    <div className="container-fluid min-vw-100 align-items-center pt-5">
      <div className="container-flex d-flex flex-column align-items-center mt-5 ">
        {data.map((item, i) => (
          <div
            className="card w-50 mb-3"
            key={i}
          >
            <div className="card-body ">
              <h4>{item.titile}</h4>
              <h6>
                <i>By {item.author}</i>
              </h6>
              <button type="button" className="btn btn-primary" onClick={() => handleClick(item)}>
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
