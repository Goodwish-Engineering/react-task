import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/PostPage.css';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return post ? (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  ) : <p>Loading...</p>;
};

export default PostPage;
