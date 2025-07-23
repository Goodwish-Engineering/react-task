import { useState } from 'react';
import { Send, User, Mail, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after showing success
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const getFieldProgress = (value) => {
    return Math.min((value.length / 10) * 100, 100);
  };

  if (isSubmitted) {
    return (
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-bounce">
              <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            </div>
            <div className="absolute -top-2 -right-2 animate-pulse">
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
            Message Sent Successfully! 🎉
          </h2>
          <p className="text-gray-600 animate-fade-in-delay">
            Thanks for reaching out! We'll get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
          Let's Connect! ✨
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Drop us a message and let's start something amazing together!
        </p>
      </div>

      <div className="relative">
        {/* Floating background elements */}
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl transition-all duration-300">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="relative group">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 transition-all duration-300 group-focus-within:text-orange-500">
                <User className="inline w-4 h-4 mr-2" />
                Your Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={`block w-full px-4 py-3 border-2 rounded-xl shadow-sm transition-all duration-300 focus:outline-none ${
                    focusedField === 'name' 
                      ? 'border-orange-400 bg-orange-50 scale-105 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                />
                {focusedField === 'name' && (
                  <div className="absolute right-3 top-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 animate-spin">
                      <div className="w-6 h-6 rounded-full border-2 border-white border-t-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
              {formData.name && (
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-pink-400 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${getFieldProgress(formData.name)}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="relative group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 transition-all duration-300 group-focus-within:text-orange-500">
                <Mail className="inline w-4 h-4 mr-2" />
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={`block w-full px-4 py-3 border-2 rounded-xl shadow-sm transition-all duration-300 focus:outline-none ${
                    focusedField === 'email' 
                      ? 'border-orange-400 bg-orange-50 scale-105 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                />
                {focusedField === 'email' && (
                  <div className="absolute right-3 top-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 animate-spin">
                      <div className="w-6 h-6 rounded-full border-2 border-white border-t-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
              {formData.email && (
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-pink-400 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${getFieldProgress(formData.email)}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Message Field */}
            <div className="relative group">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 transition-all duration-300 group-focus-within:text-orange-500">
                <MessageCircle className="inline w-4 h-4 mr-2" />
                Your Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className={`block w-full px-4 py-3 border-2 rounded-xl shadow-sm transition-all duration-300 focus:outline-none resize-none ${
                    focusedField === 'message' 
                      ? 'border-orange-400 bg-orange-50 scale-105 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                ></textarea>
                {focusedField === 'message' && (
                  <div className="absolute right-3 top-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 animate-spin">
                      <div className="w-6 h-6 rounded-full border-2 border-white border-t-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
              {formData.message && (
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex-1 mr-4">
                    <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-orange-400 to-pink-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${getFieldProgress(formData.message)}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{formData.message.length} characters</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl text-sm font-bold text-white transition-all duration-300 transform ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 hover:scale-105 hover:shadow-2xl active:scale-95'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                    Sending Your Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Fun stats */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-orange-500 group-hover:animate-bounce">24h</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-pink-500 group-hover:animate-bounce">1000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-purple-500 group-hover:animate-bounce">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 0.6s ease-out 0.3s both;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .hover:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Contact;