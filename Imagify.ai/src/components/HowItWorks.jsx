import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import { FaRegLightbulb } from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <motion.section
      id="how-it-works"
      className="relative bg-black text-white px-4 md:px-16 py-10 md:py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-labelledby="how-it-works-heading"
    >
      {/* Header */}
      <motion.h2
        id="how-it-works-heading"
        className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        How <span className="text-yellow-400">It Works</span>
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 text-sm md:text-lg mb-8 md:mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Generate stunning AI images from simple text prompts using powerful, fast, and creative AI technology.
      </motion.p>

      {/* Responsive layout: column on mobile, grid on desktop */}
      <div className="relative flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-12 md:items-center">
        {/* Left Column */}
        <motion.div
          className="flex flex-col gap-4 md:gap-8 md:mr-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <article>
            <h3 className="flex items-center text-base md:text-xl font-semibold text-white mb-1">
              {/* Icon - on mobile, inline left */}
              <span className="inline-block mr-2 md:hidden">
                <span
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#1c1c1c] to-black flex items-center justify-center shadow-lg relative"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full bg-[#BA8B02]/20 blur-md"></span>
                  <img
                    src={assets.smartAI.src}
                    alt={assets.smartAI.alt}
                    width={assets.smartAI.width}
                    height={assets.smartAI.height}
                    loading={assets.smartAI.loading}
                    className="relative z-10 h-5 w-5"
                  />
                </span>
              </span>
              <span className="hidden md:inline-block mr-3 align-middle">
                <span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#1c1c1c] to-black flex items-center justify-center shadow-lg relative"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full bg-[#BA8B02]/20 blur-md"></span>
                  <img
                    src={assets.smartAI.src}
                    alt={assets.smartAI.alt}
                    width={assets.smartAI.width}
                    height={assets.smartAI.height}
                    loading={assets.smartAI.loading}
                    className="relative z-10 h-8 w-8"
                  />
                </span>
              </span>
              Smart AI Prompt Assistance
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed ml-10 md:ml-0">
              Get intelligent AI suggestions to craft better prompts and generate high-quality images effortlessly.
            </p>
          </article>
          <article>
            <h3 className="flex items-center text-base md:text-xl font-semibold text-white mb-1">
              {/* Icon - on mobile, inline left */}
              <span className="inline-block mr-2 md:hidden">
                <span
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#1c1c1c] to-black flex items-center justify-center shadow-lg relative"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full bg-[#BA8B02]/20 blur-md"></span>
                  <FaRegLightbulb
                    className="relative z-10 h-5 w-5"
                    aria-label="Idea generation icon"
                  />
                </span>
              </span>
              <span className="hidden md:inline-block mr-3 align-middle">
                <span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#1c1c1c] to-black flex items-center justify-center shadow-lg relative"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full bg-[#BA8B02]/20 blur-md"></span>
                  <FaRegLightbulb
                    className="relative z-10 h-8 w-8"
                    aria-label="Idea generation icon"
                  />
                </span>
              </span>
              Describe Your Idea
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed ml-10 md:ml-0">
              Type anything you imagine — from realistic photos to fantasy art — and let AI bring it to life.
            </p>
          </article>
        </motion.div>

        {/* Center Phone */}
        <motion.div
          className="flex justify-center items-center my-2 md:my-0 relative"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute hidden md:block w-[625px] h-[625px] rounded-full p-[3.60px] border-t-[#BA8B02] bg-gradient-to-b from-[#BA8B0280] to-[#18181833] opacity-35"
            aria-hidden="true"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-b from-[#BA8B0280] to-[#18181833] opacity-50"></div>
          </div>
          <div className="relative">
            <img
              src={assets.iPhone16Teal.src}
              alt={assets.iPhone16Teal.alt}
              width={assets.iPhone16Teal.width}
              height={assets.iPhone16Teal.height}
              loading={assets.iPhone16Teal.loading}
              className="z-10 h-32 w-24 md:h-155 md:w-80 rounded-xl object-contain"
            />
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="flex flex-col gap-4 md:gap-8 md:ml-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <article>
            <h3 className="flex items-center text-base md:text-xl font-semibold text-white mb-1">
              {/* Icon - on mobile, inline left */}
              <span className="inline-block mr-2 md:hidden">
                <span
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#1c1c1c] to-black flex items-center justify-center shadow-lg relative"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full bg-[#BA8B02]/20 blur-md"></span>
                  <img
                    src={assets.chooseColor.src}
                    alt={assets.chooseColor.alt}
                    width={assets.chooseColor.width}
                    height={assets.chooseColor.height}
                    loading={assets.chooseColor.loading}
                    className="relative z-10 h-5 w-5"
                  />
                </span>
              </span>
              <span className="hidden md:inline-block mr-3 align-middle">
                <span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#1c1c1c] to-black flex items-center justify-center relative"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full bg-[#BA8B02]/20 blur-md"></span>
                  <img
                    src={assets.chooseColor.src}
                    alt={assets.chooseColor.alt}
                    width={assets.chooseColor.width}
                    height={assets.chooseColor.height}
                    loading={assets.chooseColor.loading}
                    className="relative z-10 h-6 w-6"
                  />
                </span>
              </span>
              Choose Style & Resolution
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed ml-10 md:ml-0">
              Pick from multiple art styles, moods, and image resolutions to match your creative needs.
            </p>
          </article>
          <article>
            <h3 className="flex items-center text-base md:text-xl font-semibold text-white mb-1">
              {/* Icon - on mobile, inline left */}
              <span className="inline-block mr-2 md:hidden">
                <span
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#1c1c1c] to-black flex items-center justify-center shadow-lg relative"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full bg-[#BA8B02]/20 blur-md"></span>
                  <img
                    src={assets.downloadIcon.src}
                    alt={assets.downloadIcon.alt}
                    width={assets.downloadIcon.width}
                    height={assets.downloadIcon.height}
                    loading={assets.downloadIcon.loading}
                    className="relative z-10 h-4 w-4"
                  />
                </span>
              </span>
              <span className="hidden md:inline-block mr-3 align-middle">
                <span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#1c1c1c] to-black flex items-center justify-center relative"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full bg-[#BA8B02]/20 blur-md"></span>
                  <img
                    src={assets.downloadIcon.src}
                    alt={assets.downloadIcon.alt}
                    width={assets.downloadIcon.width}
                    height={assets.downloadIcon.height}
                    loading={assets.downloadIcon.loading}
                    className="relative z-10 h-5 w-5"
                  />
                </span>
              </span>
              Download, Share & Use
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed ml-10 md:ml-0">
              Instantly download AI-generated images or share them anywhere with a single tap.
            </p>
          </article>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
