import '../App.css'
import { Link } from 'react-router-dom'
const BlogCard = ({ post }) => {
    return (
        <>
            <div className='blogcard'>
                <Link to={`post/${post.id}`}>
                    <h2>{post.title}</h2>
                    <p>{post.body.slice(0, 100)}...</p>
                    <Link to={`post/${post.id}`}><button>Read More →</button></Link>
                   
                </Link>


            </div>
        </>
    )
}
export default BlogCard