import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI Image Generator",
    desc: "Generate high-quality AI images from simple text prompts. Create wallpapers, artwork, illustrations, and creative visuals instantly.",
    ariaLabel: "AI image generator using text prompts",
  },
  {
    title: "Smart AI Prompt Assistance",
    desc: "Get intelligent AI prompt suggestions to create more detailed, accurate, and visually stunning images every time.",
    ariaLabel: "AI-assisted prompt suggestions for image generation",
  },
  {
    title: "Multiple Styles & Art Themes",
    desc: "Choose from anime, realistic, fantasy, 3D, abstract, cinematic, and aesthetic AI image styles.",
    ariaLabel: "Multiple AI image styles including anime and 3D art",
  },
  {
    title: "Custom Sizes & Aspect Ratios",
    desc: "Generate images in portrait, landscape, or square formats — optimized for mobile, social media, and creative use.",
    ariaLabel: "Custom image aspect ratios for different platforms",
  },
  {
    title: "One-Tap Download & Share",
    desc: "Preview, download, or share your AI-generated images instantly with a single tap.",
    ariaLabel: "One tap AI image download and sharing feature",
  },
  {
    title: "Ultra-HD & 4K AI Images",
    desc: "Unlock unlimited generations, ultra-HD and 4K quality images, exclusive styles, and faster AI processing.",
    ariaLabel: "Ultra HD and 4K AI image generation features",
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
      className="bg-black px-4 sm:px-12 lg:px-24 xl:px-40 pb-24"
      aria-labelledby="features-heading"
    >
      {/* Header */}
      <header className="text-center max-w-3xl mx-auto">
        <motion.h2
          id="features-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white"
        >
          Premium AI Wallpaper{" "}
          <span className="text-yellow-400">Features</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-400 text-lg"
        >
          Create custom AI wallpapers with powerful tools, premium styles,
          and high-quality results for your phone.
        </motion.p>
      </header>

      {/* Feature Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.12 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        role="list"
        aria-label="Imagify AI wallpaper app features"
      >
        {features.map((item, index) => (
          <motion.article
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            whileTap={{ scale: 0.97 }}
            className="rounded-2xl p-6 cursor-pointer
            shadow-[0_0_30px_rgba(255,215,0,0.08)]
            hover:shadow-[0_0_45px_rgba(255,215,0,0.18)]
            transition-shadow duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(186,139,2,0.35), rgba(24,24,24,0.75))",
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
