import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Zap, BarChart3 } from 'lucide-react';

export default function Features() {
  const systems = [
    {
      id: 'content',
      icon: BookOpen,
      title: 'Content Engine',
      subtitle: 'AI-Powered Educational Content',
      points: [
        'Generates ebooks, guides, courses',
        'Premium writing (not generic AI)',
        'Structured learning paths',
        'Real examples & case studies',
        'Multiple formats: PDF, HTML, Markdown'
      ]
    },
    {
      id: 'video',
      icon: Video,
      title: 'Video System',
      subtitle: 'Automated Video Generation',
      points: [
        'Product demos & tutorials',
        'Marketing explainer videos',
        'No filming required',
        'Multiple styles available',
        'Auto-subtitles & optimization'
      ]
    },
    {
      id: 'sales',
      icon: Zap,
      title: 'AI Sales Agent',
      subtitle: 'Real-Time Lead Conversion',
      points: [
        'Responds to leads 24/7',
        'Handles objections automatically',
        'Escalates with psychology',
        'Multi-channel delivery',
        'Smart follow-up timing'
      ]
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Analytics & Optimization',
      subtitle: 'Real-Time Performance Data',
      points: [
        'Live conversion metrics',
        'Dropoff point detection',
        'Objection pattern analysis',
        'Daily optimization reports',
        'A/B testing framework'
      ]
    }
  ];

  return (
    <section id="features" className="section-padding bg-dark-800/30 border-t border-dark-700/50">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Four Powerful Systems</span>
            <br />
            <span className="text-white">Working Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl hover:border-brand-purple/50 transition-all duration-300"
              >
                <div className="flex gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-indigo/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={32} className="text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{system.title}</h3>
                    <p className="text-dark-400 text-sm">{system.subtitle}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {system.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-dark-300">
                      <span className="text-brand-purple mt-1">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
