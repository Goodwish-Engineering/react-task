import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="bg-blue max-w-6xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App