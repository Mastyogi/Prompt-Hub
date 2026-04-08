import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock, Zap } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Content Never Converts',
      description: 'You create great content, but visitors scroll past. No engagement, no sales.'
    },
    {
      icon: Clock,
      title: 'Sales Takes Forever',
      description: 'Manual follow-ups. Forgotten leads. Deals lost to competitors while you sleep.'
    },
    {
      icon: Zap,
      title: 'Everything is Manual',
      description: 'Writing, editing, filming, sending emails, follow-ups, analytics. You are exhausted.'
    }
  ];

  return (
    <section className="section-padding bg-dark-800/50 border-t border-dark-700/50">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-dark-300">The Problem:</span>
            <br />
            <span className="gradient-text">Everything is Manual</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            You're wearing too many hats. Content creation, sales, support—each one a full-time job. Your competitors are automating. You're drowning.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl hover:border-brand-purple/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <p className="text-dark-400">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-dark-300 mb-4">
            <span className="text-white font-semibold">Sound familiar?</span> There's a better way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
