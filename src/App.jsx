import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Post from './pages/Post';
import Services from './pages/Services';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="text-center py-10 text-gray-800">404 - Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;