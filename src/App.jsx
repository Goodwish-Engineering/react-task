import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/blog/:id/details" element={<BlogDetails />} />
    </Routes>
  );
}

export default App;
