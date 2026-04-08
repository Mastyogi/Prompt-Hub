import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import axios from 'axios';

export default function LeadCapture() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', null
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setStatus(null);

    // Validation
    if (!email || !name) {
      setError('Please fill all fields');
      setStatus('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      setStatus('error');
      return;
    }

    setLoading(true);

    try {
      // Call lead capture API
      const response = await axios.post('/api/leads/capture', {
        email,
        name,
        source: 'landing_page',
        utm_source: 'organic'
      });

      if (response.status === 200) {
        setStatus('success');
        setEmail('');
        setName('');
        
        // Auto-reset after 3 seconds
        setTimeout(() => setStatus(null), 3000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to capture email. Please try again.');
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-dark-800/50 border-t border-dark-700/50">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Ready to <span className="gradient-text">10x Your Business?</span>
          </h2>
          <p className="text-center text-dark-300 mb-8">
            Get instant access to Rajnikant. Start with a free 14-day trial. No credit card required.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-brand-purple transition-colors disabled:opacity-50"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail size={20} className="absolute left-4 top-3.5 text-dark-500" />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full pl-12 pr-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-brand-purple transition-colors disabled:opacity-50"
              />
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
              >
                <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-red-300 text-sm">{error}</p>
              </motion.div>
            )}

            {/* Success Message */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
              >
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-green-300 text-sm">Welcome! Check your email for next steps.</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || status === 'success'}
              className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-brand-purple to-brand-indigo text-white hover:from-brand-purple/90 hover:to-brand-indigo/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Creating Your Account...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={20} />
                  Welcome!
                </>
              ) : (
                'Get Started Free →'
              )}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-xs text-dark-400 text-center">
              <div>✓ No credit card</div>
              <div>✓ 14-day trial</div>
              <div>✓ Cancel anytime</div>
            </div>
          </form>

          {/* Bottom Text */}
          <p className="text-center text-dark-400 text-sm mt-6">
            We'll send you a login link and setup guide. Takes 2 minutes to get started.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
