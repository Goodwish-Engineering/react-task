import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mb-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-3">Goodwish Blogs</h3>
          <p className="text-gray-400">
            From tech to tales, share your voice with the world.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="flex gap-6 text-gray-300 space-y-1">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-gray-400">Email: info@goodwishblogs.com</p>
          <p className="text-gray-400">Lalitpur, Nepal</p>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Goodwish Blogs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
