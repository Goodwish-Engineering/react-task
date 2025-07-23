import { useParams } from "react-router-dom";
import useFetch from "./../hooks/useFetch";
import '../styles/blogDetails.css'

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="blog_detail_section">
      <h1>{blog?.title}</h1>
      <p>{blog?.body}</p>
    </section>
  );
};

export default BlogDetails;
