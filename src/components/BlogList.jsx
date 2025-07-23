import useBlog from '../hooks/useBlog';

export default function BlogList(){
    const { posts } = useBlog();
    
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <hr/>
                </div>
            ))}
        </div>
    );
}