import React from "react";
import { FaPenFancy, FaRegLightbulb, FaUsers } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-8 lg:px-32 mb-8 text-black">
      <div className="absolute inset-0  bg-opacity-40 backdrop-blur-sm" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-md">
          About Goodwish Blogs
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover stories, insights, and ideas that spark creativity, inform
          your perspective, and empower your thinking. Our mission is to bring
          valuable content that inspires and educates.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <FaPenFancy className="text-3xl mb-4 text-yellow-300" />
            <h3 className="text-xl font-semibold mb-2">Creative Writing</h3>
            <p className="text-sm text-gray-500">
              Our authors love to explore bold ideas, create compelling
              narratives, and bring unique voices to trending topics.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <FaRegLightbulb className="text-3xl mb-4 text-green-300" />
            <h3 className="text-xl font-semibold mb-2">Knowledge & Insights</h3>
            <p className="text-sm text-gray-500 ">
              From tech to personal development, we break down complex concepts
              to help you learn and grow through quality content.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <FaUsers className="text-3xl mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
            <p className="text-sm text-gray-500 ">
              We write for people. Feedback, interaction, and community stories
              are at the heart of what we publish.
            </p>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default About;
