import { useState, useEffect } from 'react';
import { User, LogOut, Menu, X, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout } = useAuth() || { user: null, logout: () => {} }; // Fallback for useAuth

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'blogs', label: 'Blogs', path: '/blogs' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="mb-8 sm:mb-10">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl border-b border-gray-800'
            : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1 sm:-top-2 left-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 sm:w-0.5 sm:h-0.5 bg-blue-400 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-1 sm:bottom-2 left-1/2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400 rounded-full animate-bounce opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center group cursor-pointer">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Blog
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 group ${
                      isActive
                        ? 'text-orange-500 bg-orange-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`
                  }
                >
                  <span className="relative z-10 font-medium">{item.label}</span>
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse ${
                      item.isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </NavLink>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-gray-800 to-gray-700 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-orange-500/50"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <User className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-200 hidden sm:block max-w-16 sm:max-w-20 md:max-w-24 truncate">
                      {user.name || 'User'}
                    </span>
                    <ChevronDown
                      className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-400 transition-transform duration-300 ${showUserMenu ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-1 sm:mt-2 w-40 normal sm:w-48 md:w-56 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 py-2 animate-slide-down z-50">
                      <div className="px-3 sm:px-4 py-1.5 sm:py-2 md:py-3 border-b border-gray-700">
                        <p className="text-xs sm:text-sm font-medium text-white truncate">{user.name || 'User'}</p>
                        <p className="text-xs text-gray-400 truncate">{user.email || 'user@example.com'}</p>
                      </div>
                      <button
                        onClick={() => {
                          logout();
                          setShowUserMenu(false);
                        }}
                        className="w-full text-left px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 md:gap-3"
                      >
                        <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 overflow-hidden group"
                >
                  <span className="relative z-10">Log in</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                </NavLink>
              )}

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                ) : (
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`md:hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="py-3 sm:py-4 space-y-1 sm:space-y-2 border-t border-gray-800">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 hover:translate-x-2 animate-slide-up ${
                      isActive
                        ? 'text-orange-500 bg-orange-500/10 border-l-4 border-orange-500'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`
                  }
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Header;