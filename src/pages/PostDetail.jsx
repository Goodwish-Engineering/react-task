import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPostById } from '../services/api';
import Loader from './Loader';
import '../App.css'

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPostById(id)
      .then(setPost)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (!post) return <p>Post not found.</p>;

  return (
    <div className="post-detail">
      <h1 className='posttitle'>{post.title}</h1>
      <p className='postbody'>{post.body}</p>
    </div>
  );
}
