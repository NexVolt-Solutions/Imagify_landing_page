import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import { FaRegLightbulb } from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <motion.section
      id="how-it-works"
      className="relative bg-black text-white px-6 md:px-16 pt-0 py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-labelledby="how-it-works-heading"
    >
      {/* Header */}
      <motion.h2
        id="how-it-works-heading"
        className="text-3xl md:text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        How <span className="text-yellow-400">It Works</span>
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 text-base md:text-lg mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Generate stunning AI images from simple text prompts using powerful,
        fast, and creative AI technology.
      </motion.p>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          className="space-y-8 mr-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <article className="mb-50">
            <h3 className="text-xl font-semibold text-white-400 mb-2">
              Smart AI Prompt Assistance
            </h3>
            <div className="flex flex-row">
              <p className="text-gray-300 text-sm leading-relaxed">
                Get intelligent AI suggestions to craft better prompts and
                generate high-quality images effortlessly.
              </p>
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#1c1c1c] to-black flex items-center mr-3 justify-center shadow-lg relative"
                aria-hidden="true"
              >
                <div className="absolute inset-0 rounded-full bg-[#BA8B02]/20 blur-md"></div>
                <img
                  src={assets.smartAI.src}
                  alt={assets.smartAI.alt}
                  width={assets.smartAI.width}
                  height={assets.smartAI.height}
                  loading={assets.smartAI.loading}
                  className="relative z-10 h-8 w-8 mt-1 ml-4 pl-1 mr-7"
                />
              </div>
            </div>
          </article>

          <article>
            <h3 className="text-xl font-semibold text-white-400 mb-2">
              Describe Your Idea
            </h3>
            <div className="flex flex-row">
              <p className="text-gray-300 text-sm leading-relaxed">
                Type anything you imagine — from realistic photos to fantasy
                art — and let AI bring it to life.
              </p>
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#1c1c1c] to-black flex items-center justify-center shadow-lg relative"
                aria-hidden="true"
              >
                <div className="absolute inset-0 rounded-full bg-[#BA8B02]/20 blur-md"></div>
                <FaRegLightbulb
                  className="relative z-10 h-8 w-8 ml-4 mt-1 pr-3"
                  aria-label="Idea generation icon"
                />
              </div>
            </div>
          </article>
        </motion.div>

        {/* Center Phone */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute w-[625px] h-[625px] rounded-full p-[3.60px] border-t-[#BA8B02] bg-gradient-to-b from-[#BA8B0280] to-[#18181833] opacity-35"
            aria-hidden="true"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-b from-[#BA8B0280] to-[#18181833] opacity-50"></div>
          </div>

          <img
            src={assets.iPhone16Teal.src}
            alt={assets.iPhone16Teal.alt}
            width={assets.iPhone16Teal.width}
            height={assets.iPhone16Teal.height}
            loading={assets.iPhone16Teal.loading}
            className="relative z-10 h-155 w-60 md:w-80"
          />
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="space-y-8 ml-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <article className="mb-50">
            <div className="flex flex-row">
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#1c1c1c] to-black flex items-center justify-center relative mr-3"
                aria-hidden="true"
              >
                <div className="absolute inset-0 rounded-full bg-[#BA8B02]/20 blur-md"></div>
                <img
                  src={assets.chooseColor.src}
                  alt={assets.chooseColor.alt}
                  width={assets.chooseColor.width}
                  height={assets.chooseColor.height}
                  loading={assets.chooseColor.loading}
                  className="relative z-10 h-6 w-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-white-400 mb-2">
                Choose Style & Resolution
              </h3>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed ml-12">
              Pick from multiple art styles, moods, and image resolutions to
              match your creative needs.
            </p>
          </article>

          <article>
            <div className="flex flex-row">
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#1c1c1c] to-black flex items-center justify-center relative mr-4 ml-5"
                aria-hidden="true"
              >
                <div className="absolute inset-0 rounded-full bg-[#BA8B02]/20 blur-md"></div>
                <img
                  src={assets.downloadIcon.src}
                  alt={assets.downloadIcon.alt}
                  width={assets.downloadIcon.width}
                  height={assets.downloadIcon.height}
                  loading={assets.downloadIcon.loading}
                  className="relative z-10 h-5 w-5"
                />
              </div>

              <h3 className="text-xl font-semibold text-white-400 mb-2">
                Download, Share & Use
              </h3>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed ml-9">
              Instantly download AI-generated images or share them anywhere with
              a single tap.
            </p>
          </article>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
