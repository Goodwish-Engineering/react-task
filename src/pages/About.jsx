import { Users, BookOpen, Sparkles, Globe, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24" data-aos="fade-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4" data-aos="fade-up" data-aos-delay="100">
          About BlogApp
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Empowering creators and readers to connect, share, and inspire through stories and knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
          <div className="absolute -top-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At BlogApp, our mission is to create a vibrant platform where writers and readers connect to share knowledge, stories, and ideas. We strive to make content creation seamless and impactful.
          </p>
          <a href="/contact" className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
            Connect with Us →
          </a>
        </div>

        <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="400">
          <div className="absolute -top-4 left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2023, BlogApp was born from a passion for storytelling and knowledge sharing. We’ve grown into a global community of creators, offering tools to craft high-quality content.
          </p>
          <a href="/contact" className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
            Learn More →
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-16" data-aos="fade-up" data-aos-delay="500">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose BlogApp?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="600">
            <Globe className="w-8 h-8 text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Global Community</h3>
              <p className="text-gray-600">Join a diverse network of writers and readers from around the world, sharing ideas and inspiration.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="700">
            <Users className="w-8 h-8 text-green-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Engaging Tools</h3>
              <p className="text-gray-600">Leverage our intuitive tools for content creation, analytics, and community engagement.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="800">
            <Heart className="w-8 h-8 text-pink-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Creator-Centric</h3>
              <p className="text-gray-600">Designed with creators in mind, we prioritize your needs to help you succeed.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center" data-aos="fade-up" data-aos-delay="900">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Become part of BlogApp today and start sharing your stories with the world. Let’s create, learn, and grow together!
        </p>
        <a
          href="/signup"
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

export default About;