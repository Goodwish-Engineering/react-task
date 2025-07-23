import { Link } from "react-router-dom";
import "../styles/blogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}/details`} className="blog_card">
      <h2 className="blog_card_title">{blog?.title}</h2>
      <p className="blog_card_body">{blog?.body}</p>
    </Link>
  );
};

export default BlogCard;
