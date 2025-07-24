import { Search } from "lucide-react"

export default function Header({ searchTerm, setSearchTerm, setCurrentPage }) {
  return (
    <header className="w-full bg-white shadow-lg border-b border-slate-200 py-6 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8">
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">My Mini Blog</h1>
        </div>

        <div className="relative flex-1 max-w-md min-w-[250px]">
          <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-slate-400 h-5 w-5 pointer-events-none z-10" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl text-base outline-none transition-all duration-300 bg-slate-50 focus:border-cyan-600 focus:bg-white focus:shadow-lg focus:shadow-cyan-600/10 focus:-translate-y-0.5 placeholder-slate-400"
          />
        </div>
      </div>
    </header>
  )
}
