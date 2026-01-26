import React from "react";
import { motion } from "motion/react";

const features = [
  {
    title: "AI Wallpaper Generation",
    desc: "Generate unique, high-quality wallpapers using simple text prompts.",
    ariaLabel: "AI-powered wallpaper creation from text prompts"
  },
  {
    title: "AI Prompt Assistance",
    desc: "Get smart AI-suggested and enhanced prompts for better results.",
    ariaLabel: "Smart AI prompt suggestions for optimal wallpaper creation"
  },
  {
    title: "Styles & Themes",
    desc: "Choose from nature, colorful, fantasy, 3D, anime, and abstract styles.",
    ariaLabel: "Multiple wallpaper styles including nature, fantasy, 3D, and anime"
  },
  {
    title: "Size & Aspect Ratio Control",
    desc: "Create wallpapers in square, portrait, or landscape for mobile screens.",
    ariaLabel: "Customizable aspect ratios for all mobile screen sizes"
  },
  {
    title: "One-Tap Wallpaper Actions",
    desc: "Preview, download, or set wallpapers instantly with one tap.",
    ariaLabel: "Quick wallpaper preview, download, and set features"
  },
  {
    title: "Premium & Ultimate Features",
    desc: "Unlock unlimited generations, 4K quality, exclusive styles, and faster AI.",
    ariaLabel: "Premium features with unlimited 4K wallpaper generation"
  },
];

const AppFeatures = () => {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black px-4 sm:px-12 pt-4 lg:px-24 xl:px-40 py-24"
      aria-labelledby="features-heading"
    >
      {/* Heading */}
      <header className="text-center max-w-3xl mx-auto">
        <motion.h2
          id="features-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white"
        >
          App <span className="text-yellow-400">Features</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-400 text-lg"
        >
          Design, generate, and set your perfect wallpaper effortlessly.
        </motion.p>
      </header>

      {/* Feature Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.12 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        role="list"
        aria-label="Imagify AI app features"
      >
        {features.map((item, index) => (
          <motion.article
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 shadow-[0_0_30px_rgba(255,215,0,0.08)]"
            style={{
              background: "linear-gradient(to top, rgba(186, 139, 2, 0.4), rgba(24, 24, 24, 0.6))"
            }}
            role="listitem"
            aria-label={item.ariaLabel}
          >
            <h3 className="text-white text-lg font-semibold">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AppFeatures;