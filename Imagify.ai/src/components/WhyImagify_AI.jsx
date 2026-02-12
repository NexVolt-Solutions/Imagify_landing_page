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

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonials.map((t, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Review",
        "author": t.name,
        "reviewBody": t.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": t.rating,
          "bestRating": 5
        },
        "datePublished": t.date,
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Imagify AI",
          "applicationCategory": "DesignApplication"
        }
      }
    }))
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <motion.section
        id="why-imagify-ai"
        className="bg-black text-white px-6 md:px-16 pb-16 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        aria-labelledby="why-imagify-heading"
      >
        {/* Header */}
        <header className="text-center mb-12">
          <motion.h2
            id="why-imagify-heading"
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
            Because your creativity deserves more than ordinary designs.
          </motion.p>
        </header>

        {/* First Row */}
        <div className="relative w-full overflow-hidden mb-8">
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)"
            }}
          ></div>

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            role="list"
            aria-label="Customer testimonials row 1"
          >
            {row1Duplicated.map((t, index) => (
              <motion.article
                key={`row1-${t.name}-${index}`}
                className="flex-shrink-0 w-[350px] md:w-[400px] rounded-xl p-6 shadow-lg"
                style={{
                  background: "linear-gradient(to top, rgba(153, 117, 10, 0.4), rgba(24, 24, 24, 0.6))",
                }}
                role="listitem"
                aria-label={`Testimonial by ${t.name} from ${t.country}`}
              >
                <div className="flex items-center mb-2 gap-3">
                  {[...Array(t.rating)].map((_, i) => (
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
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)"
            }}
          ></div>

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            role="list"
            aria-label="Customer testimonials row 2"
          >
            {row2Duplicated.map((t, index) => (
              <motion.article
                key={`row2-${t.name}-${index}`}
                className="flex-shrink-0 w-[350px] md:w-[400px] rounded-xl p-6 shadow-lg"
                style={{
                  background: "linear-gradient(to top, rgba(186, 139, 2, 0.4), rgba(24, 24, 24, 0.6))",
                }}
                role="listitem"
                aria-label={`Testimonial by ${t.name} from ${t.country}`}
              >
                <div className="flex items-center mb-2 gap-3">
                  {[...Array(t.rating)].map((_, i) => (
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
    </>
  );
};

export default WhyImagify_AI;
