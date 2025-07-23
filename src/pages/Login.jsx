import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle, CheckCircle, Sparkles, Shield, Heart, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [validations, setValidations] = useState({
    email: false,
    password: false,
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (validations.email && validations.password) {
      login({ name: 'User', email: formData.email }); // Added default name
      setIsSuccess(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setFormData({ email: '', password: '' });
        setIsSuccess(false);
        navigate('/');
      }, 3000);
    } else {
      setError('Please enter a valid email and password (minimum 6 characters)');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');

    const newValidations = { ...validations };
    switch (name) {
      case 'email':
        newValidations.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case 'password':
        newValidations.password = value.length >= 6;
        break;
    }
    setValidations(newValidations);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  if (isSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 pt-16">
        <div className="text-center p-8">
          <div className="relative mb-8">
            <div className="animate-bounce">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="absolute -top-6 -right-6 animate-pulse">
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </div>
            <div className="absolute -bottom-4 -left-4 animate-pulse delay-1000">
              <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Welcome Back! 🎉
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-delay">
            You've successfully logged in!
          </p>
          <div className="mt-6 animate-fade-in-delay-2">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-800 font-medium">
              <Shield className="w-5 h-5 mr-2" />
              Secure Login Confirmed
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-16">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6 animate-pulse">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Welcome Back! 👋
          </h2>
          <p className="text-gray-600 mb-2">
            Sign in to access your account
          </p>
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <a
              href="/signup"
              onClick={(e) => {
                e.preventDefault();
                navigate('/signup');
              }}
              className="font-semibold text-blue-500 hover:text-blue-600 transition-colors duration-200"
            >
              Create one here
            </a>
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 animate-shake">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <p className="text-sm text-red-700 font-medium">{error}</p>
            </div>
          </div>
        )}

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 space-y-6">
          <div className="relative group">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              <Mail className="inline w-4 h-4 mr-2" />
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                className={`block w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                  focusedField === 'email'
                    ? 'border-blue-400 bg-blue-50 scale-105 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
              />
              {validations.email && (
                <div className="absolute right-3 top-3">
                  <CheckCircle className="w-6 h-6 text-green-500 animate-scale-in" />
                </div>
              )}
              {focusedField === 'email' && !validations.email && (
                <div className="absolute right-3 top-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-spin">
                    <div className="w-6 h-6 rounded-full border-2 border-white border-t-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="relative group">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              <Lock className="inline w-4 h-4 mr-2" />
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className={`block w-full px-4 py-3 pr-12 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                  focusedField === 'password'
                    ? 'border-blue-400 bg-blue-50 scale-105 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => handleFocus('password')}
                onBlur={handleBlur}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
              </button>
            </div>
            {validations.password && (
              <div className="absolute right-12 top-11">
                <CheckCircle className="w-6 h-6 text-green-500 animate-scale-in" />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center group">
              <div className="relative">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded transition-all duration-200"
                />
                {rememberMe && (
                  <div className="absolute -top-1 -left-1 w-6 h-6 bg-blue-500 rounded animate-ping opacity-20"></div>
                )}
              </div>
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-200"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-blue-500 hover:text-blue-600 transition-colors duration-200 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting || !validations.email || !validations.password}
              onClick={handleSubmit}
              className={`group relative w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl text-sm font-bold text-white transition-all duration-300 transform ${
                isSubmitting || !validations.email || !validations.password
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:scale-105 hover:shadow-2xl active:scale-95'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                  Signing you in...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  Log In
                  <Zap className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                </>
              )}
            </button>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <Shield className="w-6 h-6 text-green-500 mx-auto mb-1 group-hover:animate-pulse" />
                <div className="text-xs font-medium text-gray-700">Secure</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <Lock className="w-6 h-6 text-blue-500 mx-auto mb-1 group-hover:animate-pulse" />
                <div className="text-xs font-medium text-gray-700">Encrypted</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <Heart className="w-6 h-6 text-pink-500 mx-auto mb-1 group-hover:animate-pulse" />
                <div className="text-xs font-medium text-gray-700">Trusted</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Protected by industry-standard security measures
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-delay-2 {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-10px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(10px);
          }
        }
        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 0.6s ease-out 0.3s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in-delay-2 0.6s ease-out 0.6s both;
        }
        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
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

export default Login;