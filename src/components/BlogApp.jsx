import { useState, useEffect } from "react"
import Header from "./Header"
import { Calendar, Loader2, AlertCircle } from "lucide-react"

export default function BlogApp() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPost, setSelectedPost] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    setLoading(true)
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts")
        return res.json()
      }),
      fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users")
        return res.json()
      }),
    ])
      .then(([postsData, usersData]) => {
        setPosts(postsData)
        setUsers(usersData)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to load blog posts. Please try again later.")
        setLoading(false)
      })
  }, [])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId)
    return user ? user.name : "Unknown Author"
  }

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl max-w-md w-11/12 border border-slate-200">
          <Loader2 className="h-10 w-10 text-cyan-600 mb-4 animate-spin mx-auto" />
          <p className="text-lg text-slate-600 font-medium">Loading blog posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl max-w-md w-11/12 border border-slate-200">
          <AlertCircle className="h-10 w-10 text-red-600 mb-4 mx-auto" />
          <p className="text-lg text-slate-600 font-medium mb-6">{error}</p>
          <button
            className="bg-transparent border-2 border-cyan-600 text-cyan-600 px-6 py-3 rounded-lg font-semibold uppercase tracking-wide text-sm transition-all duration-300 hover:bg-cyan-600 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-600/25"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} setCurrentPage={setCurrentPage} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 text-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-slate-600 font-medium">
            {filteredPosts.length === 0
              ? "No posts found"
              : `Showing ${startIndex + 1}-${Math.min(startIndex + postsPerPage, filteredPosts.length)} of ${
                  filteredPosts.length
                } posts`}
          </p>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-200">
            <p className="text-xl text-slate-600">No posts match your search criteria.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 group relative overflow-hidden h-full flex flex-col"
                  onClick={() => setSelectedPost(post)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setSelectedPost(post)
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                  <div className="mb-6">
                    <span className="inline-block bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 shadow-sm shadow-cyan-600/25">
                      Post #{post.id}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 leading-tight line-clamp-2">{post.title}</h2>
                  </div>

                  <div className="flex-grow flex flex-col">
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                      {truncateText(post.body, 120)}
                    </p>
                    <div className="flex items-center text-xs text-slate-500 font-medium mt-auto">
                      <Calendar className="h-4 w-4 mr-2 text-cyan-600" />
                      <span>{getUserName(post.userId)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <button
                  className="bg-transparent border-2 border-cyan-600 text-cyan-600 px-6 py-3 rounded-lg font-semibold uppercase tracking-wide text-sm transition-all duration-300 hover:bg-cyan-600 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-600/25 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      className={`w-12 h-12 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        currentPage === page
                          ? "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-600/25"
                          : "bg-transparent border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-600/25"
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  className="bg-transparent border-2 border-cyan-600 text-cyan-600 px-6 py-3 rounded-lg font-semibold uppercase tracking-wide text-sm transition-all duration-300 hover:bg-cyan-600 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-600/25 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {selectedPost && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-10 relative shadow-2xl border border-slate-200 animate-in slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 shadow-sm shadow-cyan-600/25">
                Post #{selectedPost.id}
              </span>
              <h3 id="modal-title" className="text-3xl font-extrabold text-slate-900 leading-tight">
                {selectedPost.title}
              </h3>
            </div>

            <div className="flex items-center text-sm text-slate-500 font-medium mb-8">
              <Calendar className="h-4 w-4 mr-2 text-cyan-600" />
              <span>By {getUserName(selectedPost.userId)}</span>
            </div>

            <div className="mb-8">
              <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-wrap">{selectedPost.body}</p>
            </div>

            <button
              className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold uppercase tracking-wide text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-600/35"
              onClick={() => setSelectedPost(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
