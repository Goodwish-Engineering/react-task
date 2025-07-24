import "../styles/BlogItem.css";

const BlogItem = ({ post, onReadMore }) => {
  return (
    <div className="blog-item">
      <h3 className="blog-title">{post.title}</h3>
      <p className="blog-body">{post.body}</p>
      <button className="blog-button" onClick={onReadMore}>Read More</button>
    </div>
  );
};

export default BlogItem;
