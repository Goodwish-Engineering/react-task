import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react'; // Added useEffect and useRef
import blogPosts from '../data/blogPosts.json';
import { User } from 'lucide-react';

const Post = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id)) || blogPosts.find(p => p.author === "Dr. Jane Smith" && p.date === "2024-12-15");
  const authorRef = useRef(null); // Create a ref for the author section

  useEffect(() => {
    if (authorRef.current) {
      authorRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the author section on load
    }
  }, []); // Empty dependency array to run on mount

  if (!post) {
    return <div className="text-center py-10 text-gray-600">Post not found</div>;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const popularPosts = [...blogPosts]
    .sort((a, b) => b.readTime - a.readTime)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div data-aos="fade-up">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <div className="flex items-center gap-2 mt-4" ref={authorRef}> {/* Attach ref to this div */}
          <User className="w-5 h-5 text-gray-500" />
          <span className="text-sm text-gray-600">{post.author}</span>
          <span className="text-sm text-gray-400">• {post.date}</span>
        </div>
        <h1 className="text-3xl font-bold mt-4 text-gray-900">{post.title}</h1>
        <p className="text-gray-700 mt-4 leading-relaxed">{post.body}</p>
        <div className="mt-6 text-sm text-gray-500">
          <span>Read Time: {post.readTime} min</span>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2" data-aos="fade-right">
          <div className="mt-6 text-gray-700 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="mt-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="mt-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
        <aside className="lg:col-span-1" data-aos="fade-left">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Posts</h2>
          <div className="space-y-4">
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {relatedPost.title}
                  </h3>
                  <p className="text-xs text-gray-500">{relatedPost.author}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Popular Blogs</h2>
          <div className="space-y-4">
            {popularPosts.map((popularPost) => (
              <div
                key={popularPost.id}
                className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <img
                  src={popularPost.image}
                  alt={popularPost.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {popularPost.title}
                  </h3>
                  <p className="text-xs text-gray-500">{popularPost.author}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Post;