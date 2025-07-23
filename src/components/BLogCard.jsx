import '../App.css'
import { Link } from 'react-router-dom'
const BlogCard = ({ post }) => {
    return (
        <>
            <div className='blogcard'>
                <Link to={`post/${post.id}`}>
                    <h2>{post.title}</h2>
                    <p>{post.body.slice(0, 100)}...</p>
                    <button> <Link to={`post/${post.id}`}>Read More →</Link></button>
                   
                </Link>


            </div>
        </>
    )
}
export default BlogCard