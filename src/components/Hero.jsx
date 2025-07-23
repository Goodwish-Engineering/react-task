import { ArrowRight, Sparkles, BookOpen, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 md:py-24 overflow-hidden" data-aos="fade-up">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center mb-4 sm:mb-6" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Welcome to Blog
          </h1>
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 ml-2 sm:ml-4 text-yellow-400 animate-pulse" />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Join a vibrant community of writers and readers passionate about sharing stories, ideas, and knowledge. BlogApp provides powerful tools, expert tips, and a supportive platform to help you create and grow your blog.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center" data-aos="fade-up" data-aos-delay="300">
          <a
            href="/signup"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Start Your Blog
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 md:mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6" data-aos="fade-up" data-aos-delay="400">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-semibold text-white">Vibrant Community</h3>
              <p className="text-xs sm:text-sm text-gray-300">Connect with thousands of creators and readers worldwide.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6" data-aos="fade-up" data-aos-delay="500">
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-semibold text-white">Powerful Tools</h3>
              <p className="text-xs sm:text-sm text-gray-300">Access intuitive tools for writing, designing, and analytics.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6" data-aos="fade-up" data-aos-delay="600">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-semibold text-white">Creative Freedom</h3>
              <p className="text-xs sm:text-sm text-gray-300">Express yourself with customizable templates and features.</p>
            </div>
          </div>
        </div>
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
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;