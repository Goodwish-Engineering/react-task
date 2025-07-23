import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, Sparkles, Shield, CheckCircle, AlertCircle, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [validations, setValidations] = useState({
    name: false,
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

    if (validations.name && validations.email && validations.password) {
      login({ name: formData.name, email: formData.email });
      setIsSuccess(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setFormData({ name: '', email: '', password: '' });
        setIsSuccess(false);
        navigate('/');
      }, 3000);
    } else {
      setError('Please fill in all fields correctly');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');

    const newValidations = { ...validations };
    switch (name) {
      case 'name':
        newValidations.name = value.length >= 2;
        break;
      case 'email':
        newValidations.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case 'password':
        const strength = calculatePasswordStrength(value);
        setPasswordStrength(strength);
        newValidations.password = strength >= 3;
        break;
    }
    setValidations(newValidations);
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getPasswordStrengthLabel = () => {
    switch (passwordStrength) {
      case 0:
        return 'Very Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      case 5:
        return 'Very Strong';
      default:
        return '';
    }
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0:
        return 'bg-red-500';
      case 1:
        return 'bg-red-400';
      case 2:
        return 'bg-yellow-500';
      case 3:
        return 'bg-blue-500';
      case 4:
        return 'bg-green-500';
      case 5:
        return 'bg-green-600';
      default:
        return 'bg-gray-300';
    }
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
              <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
            </div>
            <div className="absolute -top-4 -right-4 animate-pulse">
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </div>
            <div className="absolute -bottom-2 -left-2 animate-pulse delay-1000">
              <Sparkles className="w-8 h-8 text-pink-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Welcome Aboard! 🎉
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-delay">
            Your account has been created successfully!
          </p>
          <div className="mt-6 animate-fade-in-delay-2">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-800 font-medium">
              <Shield className="w-5 h-5 mr-2" />
              Account Secured
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-16">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 mb-6 animate-pulse">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Join Our Community! ✨
          </h2>
          <p className="text-gray-600 mb-2">
            Create your account and start your journey
          </p>
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <a
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                navigate('/login');
              }}
              className="font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              Log In here
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
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              <User className="inline w-4 h-4 mr-2" />
              Full Name
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                required
                className={`block w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                  focusedField === 'name'
                    ? 'border-orange-400 bg-orange-50 scale-105 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
              />
              {validations.name && (
                <div className="absolute right-3 top-3">
                  <CheckCircle className="w-6 h-6 text-green-500 animate-scale-in" />
                </div>
              )}
            </div>
          </div>

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
                    ? 'border-orange-400 bg-orange-50 scale-105 shadow-lg'
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
                    ? 'border-orange-400 bg-orange-50 scale-105 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="Create a strong password"
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

            {formData.password && (
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Password Strength:</span>
                  <span
                    className={`text-xs font-medium ${
                      passwordStrength < 2
                        ? 'text-red-500'
                        : passwordStrength < 4
                        ? 'text-yellow-500'
                        : 'text-green-500'
                    }`}
                  >
                    {getPasswordStrengthLabel()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${getPasswordStrengthColor()}`}
                    style={{ width: `${(passwordStrength / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !validations.name ||
                !validations.email ||
                !validations.password
              }
              onClick={handleSubmit}
              className={`group relative w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl text-sm font-bold text-white transition-all duration-300 transform ${
                isSubmitting ||
                !validations.name ||
                !validations.email ||
                !validations.password
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 hover:scale-105 hover:shadow-2xl active:scale-95'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                  Creating Your Account...
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                  Create Account
                  <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                </>
              )}
            </button>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <Shield className="w-8 h-8 text-green-500 mx-auto mb-2 group-hover:animate-pulse" />
                <div className="text-xs font-medium text-gray-700">Secure</div>
                <div className="text-xs text-gray-500">256-bit SSL</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <Lock className="w-8 h-8 text-blue-500 mx-auto mb-2 group-hover:animate-pulse" />
                <div className="text-xs font-medium text-gray-700">Protected</div>
                <div className="text-xs text-gray-500">GDPR Compliant</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            By signing up, you agree to our{' '}
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              Terms
            </a>
            {' '}
            and{' '}
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              Privacy Policy
            </a>
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

export default Signup;