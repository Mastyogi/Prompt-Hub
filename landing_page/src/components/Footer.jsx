import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#privacy' },
        { label: 'Terms', href: '#terms' },
        { label: 'Security', href: '#security' }
      ]
    }
  ];

  return (
    <footer className="border-t border-dark-700/50 bg-dark-900">
      <div className="max-container px-4 py-16">
        <div className="grid sm:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-purple to-brand-indigo flex items-center justify-center">
                <span className="text-white font-bold text-sm">RN</span>
              </div>
              <span className="text-lg font-bold gradient-text">Rajnikant</span>
            </div>
            <p className="text-dark-400 text-sm">
              AI operating system for founders who ship fast.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, idx) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-dark-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700/50 pt-8 pb-4">
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <h4 className="font-semibold mb-1">Ready to get started?</h4>
              <p className="text-dark-400 text-sm">Join founders scaling faster with Rajnikant.</p>
            </div>
            <button className="btn-primary inline-flex items-center gap-2 whitespace-nowrap">
              Start Free Trial
              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-dark-400 text-sm">
            <p>&copy; 2026 Rajnikant AI. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
