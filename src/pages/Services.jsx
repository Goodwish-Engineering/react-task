import { PenTool, Search, Users, Palette, Rocket, Shield, Sparkles } from 'lucide-react';

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24" data-aos="fade-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4" data-aos="fade-up" data-aos-delay="100">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Discover our comprehensive suite of services designed to elevate your blog and engage your audience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute -top-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <PenTool className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Content Creation</h2>
          <p className="text-gray-600 mb-4">
            Craft compelling blog posts, articles, and social media content tailored to your brand, designed to captivate and resonate with your audience.
          </p>
          <a href="/contact" className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
            Learn More →
          </a>
        </div>

        <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
          <div className="absolute -top-4 left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
            <Search className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">SEO Optimization</h2>
          <p className="text-gray-600 mb-4">
            Boost your blog’s visibility with advanced SEO strategies, including keyword research, on-page optimization, and link building to drive organic traffic.
          </p>
          <a href="/contact" className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
            Learn More →
          </a>
        </div>

        <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="400">
          <div className="absolute -top-4 left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Community Management</h2>
          <p className="text-gray-600 mb-4">
            Foster a vibrant community with expert comment moderation, user engagement, and social media strategies to build loyalty and interaction.
          </p>
          <a href="/contact" className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
            Learn More →
          </a>
        </div>

        <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="500">
          <div className="absolute -top-4 left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
            <Palette className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Custom Design</h2>
          <p className="text-gray-600 mb-4">
            Create a unique brand identity with custom blog designs, including responsive layouts, stunning visuals, and user-friendly interfaces.
          </p>
          <a href="/contact" className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
            Learn More →
          </a>
        </div>

        <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="600">
          <div className="absolute -top-4 left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Performance Optimization</h2>
          <p className="text-gray-600 mb-4">
            Enhance your blog’s speed and performance with our optimization services, ensuring fast load times and a seamless user experience.
          </p>
          <a href="/contact" className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
            Learn More →
          </a>
        </div>

        <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="700">
          <div className="absolute -top-4 left-4 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Security Solutions</h2>
          <p className="text-gray-600 mb-4">
            Protect your blog with robust security measures, including SSL integration, regular backups, and protection against cyber threats.
          </p>
          <a href="/contact" className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
            Learn More →
          </a>
        </div>
      </div>

      <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="800">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Elevate Your Blog?</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Let us help you take your blog to the next level with our expert services. Contact us today to get started!
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-sm hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
          <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
        </a>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;