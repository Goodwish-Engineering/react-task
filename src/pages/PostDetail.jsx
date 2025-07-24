import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl">
      <Link to="/" className="text-white font-semibold">
        Back to Home
      </Link>
      <h2 className="text-2xl">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
