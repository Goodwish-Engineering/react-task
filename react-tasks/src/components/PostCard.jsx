import { Link } from 'react-router-dom';
import '../styles/PostCard.css';

const PostCard = ({ post }) => (
  <div className="post-card">
    <h2>{post.title}</h2>
    <p>{post.body.substring(0, 60)}...</p>
    <Link to={`/post/${post.id}`}>Read More</Link>
  </div>
);

export default PostCard;
