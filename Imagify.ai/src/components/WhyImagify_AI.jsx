import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Miranda Cosgrove',
    country: 'Canada',
    text: 'The styles are amazing and the quality is really high. I love how fast the wallpapers are generated.',
    rating: 5,
    date: '2024-12-15'
  },
  {
    name: 'Maddison Clarke',
    country: 'Australia',
    text: 'This app makes my phone look fresh every day. Simple prompts and perfect results.',
    rating: 5,
    date: '2024-12-10'
  },
  {
    name: 'Daniel Harris',
    country: 'United Kingdom',
    text: 'AI understands prompts really well. Every wallpaper feels unique and premium.',
    rating: 5,
    date: '2024-12-08'
  },
  {
    name: 'Sophia Martinez',
    country: 'Spain',
    text: 'Fast generation and amazing detail. I keep changing my wallpaper daily now.',
    rating: 5,
    date: '2024-12-05'
  },
  {
    name: 'Jason Lee',
    country: 'Singapore',
    text: 'Clean interface, great styles, and super smooth performance. Love it!',
    rating: 5,
    date: '2024-12-01'
  },
  {
    name: 'Mike Tyson',
    country: 'America',
    text: 'Beautiful wallpapers and very easy to use. The quality is top-notch.',
    rating: 5,
    date: '2024-12-18'
  },
];

const WhyImagify_AI = () => {
  const row1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const row2 = testimonials.slice(Math.ceil(testimonials.length / 2));

  const row1Duplicated = [...row1, ...row1];
  const row2Duplicated = [...row2, ...row2];

  return (
    <motion.section 
      id="why-imagify-ai" 
      className="bg-black text-white px-6 pt-0 md:px-16 py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <header className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why <span className="text-yellow-400">Imagify AI</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Because your screen deserves more than ordinary wallpapers.
        </motion.p>
      </header>

      {/* First Row */}
      <div className="relative w-full overflow-hidden mb-8">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          {row1Duplicated.map((t, index) => (
            <motion.article
              key={`row1-${t.name}-${index}`}
              className="flex-shrink-0 w-[350px] md:w-[400px] rounded-xl p-6 shadow-lg"
              style={{
                background: "linear-gradient(to top, rgba(153, 117, 10, 0.4), rgba(24, 24, 24, 0.6))"
              }}
            >
              <div className="flex items-center mb-2 gap-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-300 mb-4">{t.text}</p>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-gray-400">{t.country}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          {row2Duplicated.map((t, index) => (
            <motion.article
              key={`row2-${t.name}-${index}`}
              className="flex-shrink-0 w-[350px] md:w-[400px] rounded-xl p-6 shadow-lg"
              style={{
                background: "linear-gradient(to top, rgba(186, 139, 2, 0.4), rgba(24, 24, 24, 0.6))"
              }}
            >
              <div className="flex items-center mb-2 gap-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-300 mb-4">{t.text}</p>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-gray-400">{t.country}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyImagify_AI;
