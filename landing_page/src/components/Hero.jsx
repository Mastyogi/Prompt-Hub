import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-purple/30 bg-brand-purple/5 mb-6">
            <span className="text-xs text-brand-purple font-semibold">🚀 INTRODUCING RAJNIKANT</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text">AI That Builds,</span>
            <br />
            <span className="text-white">Sells, and Scales</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-dark-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            One autonomous system handles everything: content creation, video generation, AI sales automation, and real-time optimization. Watch your conversions multiply while you sleep.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary inline-flex items-center gap-2 justify-center">
              Start Free Trial
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary inline-flex items-center gap-2 justify-center">
              <Play size={20} />
              Watch Demo (2 min)
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-dark-400">
            <div className="flex items-center gap-2">
              <span className="text-brand-purple">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-purple">✓</span>
              <span>Free for 14 days</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-purple">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image/Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="glass p-2 rounded-lg">
            <div className="bg-dark-800 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-indigo/20"></div>
              <div className="text-center z-10">
                <div className="w-16 h-16 rounded-full border-2 border-brand-purple mx-auto mb-4 flex items-center justify-center">
                  <Play size={32} className="text-brand-purple ml-1" />
                </div>
                <p className="text-dark-300">Dashboard Preview Coming Soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
