import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      className="bg-cover bg-center text-white py-36 px-6 text-center mx-4"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg')`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-gray-500/10 bg-opacity-60 p-6 rounded-lg max-w-3xl h-full mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Where Every Wish Finds Its Words
        </h1>
        <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-6">
          Explore a world of ideas, stories, and knowledge. From tech talk to
          life tales, your blog belongs here.
        </p>

        <button
          onClick={() => navigate("/blogs")}
          className="mt-6 bg-white text-blue-700 hover:bg-blue-100 cursor-pointer transition px-6 py-3 rounded-full font-semibold"
        >
          Explore Blogs
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
