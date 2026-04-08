import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      title: 'AI Content Engine',
      description: 'Generates ebooks, guides, and courses. Premium quality, not generic AI text.'
    },
    {
      title: 'Video Generation',
      description: 'Creates product demos, tutorials, and marketing videos automatically.'
    },
    {
      title: 'Real-Time Sales Agent',
      description: '24/7 AI sales rep. Engages leads, handles objections, closes deals while you sleep.'
    },
    {
      title: 'Live Performance Analytics',
      description: 'Real metrics from platforms. See exactly what works, what doesn\'t, why.'
    },
    {
      title: 'Smart Lead Scoring',
      description: 'AI rates each lead (0-100). Hot leads bubble to top. Ready-to-close deals highlighted.'
    },
    {
      title: 'Multi-Channel Delivery',
      description: 'Telegram, Email, SMS. Messages reach your leads where they are, when they\'re ready.'
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Meet Rajnikant:</span>
            <br />
            <span className="text-white">Your Autonomous Business System</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            One AI system that handles content, video, sales, and analytics. Built for founders who want to scale without hiring.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <div className="flex gap-3 mb-4">
                <div className="flex-shrink-0">
                  <CheckCircle size={24} className="text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-dark-400 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">How It Works</h3>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Describe Your Goal', desc: 'Tell Rajnikant what you want to achieve' },
              { step: '2', title: 'AI Creates Content', desc: 'Premium ebooks, videos, landing pages' },
              { step: '3', title: 'Auto-Engages Leads', desc: '24/7 AI sales rep conversations' },
              { step: '4', title: 'Tracks & Optimizes', desc: 'Real-time metrics, continuous improvement' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-purple to-brand-indigo flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-white">{item.step}</span>
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-dark-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">What You Get</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { metric: '10-50x', label: 'More Conversions' },
              { metric: '70% Faster', label: 'Lead Response' },
              { metric: '0 Manual', label: 'Repetitive Tasks' }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold gradient-text mb-2">{item.metric}</div>
                <p className="text-dark-300">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
