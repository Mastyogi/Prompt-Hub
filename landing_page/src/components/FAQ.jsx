import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does Rajnikant work?',
      answer: 'Rajnikant is an AI operating system with 4 integrated engines: Content (generates ebooks/guides), Video (creates demos/tutorials), Sales Agent (engages leads 24/7), and Analytics (tracks everything). All work together automatically.'
    },
    {
      question: 'Do I need to know AI or coding?',
      answer: 'No. Rajnikant is designed for non-technical users. Just describe what you want, and the system handles everything. No coding, no AI knowledge required.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Start free for 14 days. After that, pricing starts at $99/month for the starter plan. We offer flexible plans for teams and enterprises. No long-term contracts.'
    },
    {
      question: 'Can I integrate with existing tools?',
      answer: 'Yes. Rajnikant integrates with email platforms, CRMs, payment processors, and analytics tools. We support 500+ integrations out of the box.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Most users see improvements within 48 hours. The AI sales agent starts engaging leads immediately. Content generation takes minutes, not days.'
    },
    {
      question: 'Is my data safe?',
      answer: 'Yes. We use enterprise-grade encryption, comply with GDPR/CCPA, and never sell your data. Your data is yours, always.'
    },
    {
      question: 'What if I need help?',
      answer: 'We offer 24/7 support via email, chat, and phone. Plus, weekly onboarding calls help you get maximum value from the system.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes. No contracts, no hidden fees. Cancel anytime with a single click. We\'ll even help you export your data.'
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked</span>
            <br />
            <span className="text-white">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-dark-800/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-brand-purple flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 border-t border-dark-700/50"
                >
                  <p className="text-dark-300">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-dark-300 mb-4">Still have questions?</p>
          <button className="btn-secondary">
            Schedule a 15-min demo call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
