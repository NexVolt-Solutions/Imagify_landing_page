import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Miranda Cosgrove",
    country: "Canada",
    text: "The AI styles are amazing and the image quality is fantastic. I love how fast my designs are generated.",
    rating: 5,
    date: "2024-12-15"
  },
  {
    name: "Maddison Clarke",
    country: "Australia",
    text: "This app makes creative design so easy. Simple prompts and perfect AI-generated results.",
    rating: 5,
    date: "2024-12-10"
  },
  {
    name: "Daniel Harris",
    country: "United Kingdom",
    text: "AI understands prompts really well. Every generated image feels unique and premium.",
    rating: 5,
    date: "2024-12-08"
  },
  {
    name: "Sophia Martinez",
    country: "Spain",
    text: "Fast generation and amazing detail. I now create new images every day.",
    rating: 5,
    date: "2024-12-05"
  },
  {
    name: "Jason Lee",
    country: "Singapore",
    text: "Clean interface, fantastic styles, and smooth AI performance. Love it!",
    rating: 5,
    date: "2024-12-01"
  },
  {
    name: "Mike Tyson",
    country: "America",
    text: "Beautiful AI-generated images and very easy to use. The quality is top-notch.",
    rating: 5,
    date: "2024-12-18"
  },
];

const WhyImagify_AI = () => {
  const row1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const row2 = testimonials.slice(Math.ceil(testimonials.length / 2));

  const row1Duplicated = [...row1, ...row1];
  const row2Duplicated = [...row2, ...row2];

  const carouselSpeed = 17;

  return (
    <motion.section
      id="why-imagify-ai"
      className="bg-black text-white px-6 md:px-16 pb-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why <span className="text-yellow-400">Imagify AI</span>
        </h2>

        <p className="text-gray-400 text-base md:text-lg">
          Because your creativity deserves more than ordinary designs.
        </p>
      </div>

      {/* First Row */}
      <div className="relative w-full overflow-hidden mb-8">
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)",
          }}
        />

        <motion.div
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: carouselSpeed,
              ease: "linear",
            },
          }}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.2}
        >
          {row1Duplicated.map((t, index) => (
            <motion.div
              key={`row1-${t.name}-${index}`}
              className="flex-shrink-0 w-[350px] md:w-[400px] rounded-xl p-6 shadow-lg"
              style={{
                background:
                  "linear-gradient(to top, rgba(153, 117, 10, 0.4), rgba(24, 24, 24, 0.6))",
              }}
            >
              <div className="flex items-center mb-2 gap-3">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-300 mb-4">{t.text}</p>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-gray-400">{t.country}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)",
          }}
        />

        <motion.div
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: carouselSpeed,
              ease: "linear",
            },
          }}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.2}
        >
          {row2Duplicated.map((t, index) => (
            <motion.div
              key={`row2-${t.name}-${index}`}
              className="flex-shrink-0 w-[350px] md:w-[400px] rounded-xl p-6 shadow-lg"
              style={{
                background:
                  "linear-gradient(to top, rgba(186, 139, 2, 0.4), rgba(24, 24, 24, 0.6))",
              }}
            >
              <div className="flex items-center mb-2 gap-3">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-300 mb-4">{t.text}</p>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-gray-400">{t.country}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyImagify_AI;