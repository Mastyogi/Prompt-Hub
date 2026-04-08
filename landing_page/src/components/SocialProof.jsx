import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function SocialProof() {
  const stats = [
    { value: '10,000+', label: 'Users Worldwide' },
    { value: '2.5M+', label: 'Leads Processed' },
    { value: '45%', label: 'Avg Conversion Lift' },
    { value: '24/7', label: 'AI Coverage' }
  ];

  const testimonials = [
    {
      text: 'Rajnikant automated everything we were doing manually. In 30 days, our conversions tripled.',
      author: 'Sarah Chen',
      role: 'CEO, TechStartup',
      rating: 5
    },
    {
      text: 'The AI sales agent is like having a top-performing salesman who never sleeps. Game changer.',
      author: 'Marcus Johnson',
      role: 'Founder, SaaS Inc',
      rating: 5
    },
    {
      text: 'Content generation takes 1 minute instead of 1 week. Quality is premium. This is the future.',
      author: 'Emma Rodriguez',
      role: 'Content Director, Agency',
      rating: 5
    }
  ];

  return (
    <section id="proof" className="section-padding">
      <div className="max-container">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">Trusted by Builders</span>
            <br />
            <span className="text-white">Who Ship Fast</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-dark-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">What Users Say</h3>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-purple text-brand-purple" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-dark-200 mb-4 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-dark-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center glass p-8 rounded-xl"
        >
          <p className="text-lg text-dark-200 mb-4">
            Join thousands of founders scaling faster with Rajnikant
          </p>
          <button className="btn-primary">Start Your Free Trial →</button>
        </motion.div>
      </div>
    </section>
  );
}
