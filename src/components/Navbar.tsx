import { Link } from "react-router-dom";
import logo2 from "../assets/logo1.png"
import type React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-green mb-8 mt-2 flex p-3 justify-between mx-4">
      <Link to="/" className="">
        <img src={logo2} alt="Goodwish Blogs" className="w-36" />
      </Link>
      <div className="flex gap-8 text-center items-center">
        <Link to="/" className=" ">Home</Link>
        <Link to="/blogs" className=" ">Blogs</Link>
        <Link to="/about" className="">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
