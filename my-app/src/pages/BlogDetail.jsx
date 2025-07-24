import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="blog-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default BlogDetail;
