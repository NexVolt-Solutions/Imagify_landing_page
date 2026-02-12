import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is Imagify AI?',
    answer:
      'Imagify AI is an AI-powered wallpaper app that lets you create unique, high-quality wallpapers using simple text prompts.',
    category: 'General'
  },
  {
    question: 'Is Imagify AI free to use?',
    answer:
      'Yes, Imagify AI offers a free version with limited generations. You can upgrade to Pro for unlimited access and premium features.',
    category: 'Pricing'
  },
  {
    question: 'What do I get with Imagify AI Pro?',
    answer:
      'Pro users enjoy unlimited AI generations, high-resolution wallpapers, exclusive styles, faster processing, and an ad-free experience.',
    category: 'Features'
  },
  {
    question: 'Can I set wallpapers directly from the app?',
    answer:
      'Yes, you can preview, download, and set wallpapers on your device with just one tap.',
    category: 'Features'
  },
  {
    question: 'Are the wallpapers safe and unique?',
    answer:
      'Absolutely. All wallpapers are AI-generated, original, and safe for personal use.',
    category: 'General'
  },
  {
    question: 'Which devices are supported?',
    answer:
      'Imagify AI works on most Android devices and supports multiple screen sizes and resolutions.',
    category: 'Compatibility'
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faqs"
      className="bg-black text-white pt-0 px-6 md:px-16 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-labelledby="faq-heading"
    >
      <header className="text-center mb-12">
        <motion.h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently <span className="text-yellow-400">Asked</span> Questions
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Everything you need to know about Imagify AI and how it works.
        </motion.p>
      </header>

      <div 
        className="max-w-3xl mx-auto space-y-4"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {faqs.map((faq, index) => (
          <article
            key={index}
            className="rounded-lg overflow-hidden"
            style={{ background: "linear-gradient(to bottom, rgba(153, 117, 10, 0.4), rgba(24, 24, 24, 0.6))" }}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 itemProp="name">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-white font-semibold">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="h-5 w-5 text-white flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  className="overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-6 pb-4 text-sm text-gray-300" itemProp="text">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        ))}
      </div>

      {/* Schema.org FAQ Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </motion.section>
  );
};

export default FAQSection;
