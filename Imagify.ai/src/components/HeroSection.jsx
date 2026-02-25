import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 px-6 sm:px-10 lg:px-20 pt-2 pb-16 bg-black text-white"
      aria-labelledby="hero-heading"
    >
      {/* LEFT CONTENT */}
      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <span
          className="inline-flex items-center justify-center px-4 py-1.5 mb-5 md:mb-7 rounded-full border border-[#99E39E] bg-[#99E39E1A] text-[#99E39E] text-sm font-semibold"
        >
          Future of AI Image Creation
        </span>

        {/* Heading */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-medium leading-snug"
          style={{ fontFamily: "DM Sans" }}
        >
          Create Images with AI – Free AI Image Generator
        </h1>

        {/* Description */}
        <p
          className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4 mb-8"
          style={{ fontFamily: "DM Sans", fontWeight: 400 }}
        >
          Generate stunning AI images from simple text prompts. Imagify AI helps you create wallpapers, artwork, and creative visuals easily and fast.
        </p>

        {/* STORE BUTTONS */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
          {/* GOOGLE PLAY */}
          <a
            href="https://play.google.com/store/apps/details?id=com.imagify"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Imagify AI on Google Play"
            className="flex items-center gap-4 h-[52px] min-w-[160px] sm:min-w-[180px] px-4 rounded-md bg-gradient-to-b from-[#2B2B2B] to-[#0F0F0F] border border-white/10 hover:from-[#3A3A3A] hover:to-[#141414] transition-all"
          >
            <img
              src={assets?.storeIcons?.googlePlay?.src}
              alt={assets?.storeIcons?.googlePlay?.alt || "Google Play logo"}
              className="w-7 h-7"
              width={assets?.storeIcons?.googlePlay?.width || 28}
              height={assets?.storeIcons?.googlePlay?.height || 28}
              loading={assets?.storeIcons?.googlePlay?.loading || "lazy"}
            />
            <div className="leading-tight text-left">
              <p className="text-[11px] uppercase tracking-wide text-gray-300">
                Get it on
              </p>
              <p className="text-[18px] font-semibold text-white leading-none">
                Google Play
              </p>
            </div>
          </a>

          {/* APP STORE */}
          <a
            href="https://apps.apple.com/app/imagify-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Imagify AI on the App Store"
            className="flex items-center gap-4 h-[52px] min-w-[160px] sm:min-w-[172px] px-4 rounded-md bg-gradient-to-b from-[#2B2B2B] to-[#0F0F0F] border border-white/10 hover:from-[#3A3A3A] hover:to-[#141414] transition-all"
          >
            <img
              src={assets?.storeIcons?.apple?.src}
              alt={assets?.storeIcons?.apple?.alt || "Apple App Store logo"}
              className="w-7 h-7"
              width={assets?.storeIcons?.apple?.width || 28}
              height={assets?.storeIcons?.apple?.height || 28}
              loading={assets?.storeIcons?.apple?.loading || "lazy"}
            />
            <div className="leading-tight text-left">
              <p className="text-[11px] text-gray-300">
                Download on the
              </p>
              <p className="text-[18px] font-semibold text-white leading-none">
                App Store
              </p>
            </div>
          </a>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="flex justify-center w-full md:w-auto mt-10 md:mt-0"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={assets?.mobileMockup?.src}
          alt={assets?.mobileMockup?.alt || "Mobile app preview of Imagify AI"}
          className="w-full max-w-[260px] sm:max-w-[360px] md:max-w-[520px] lg:max-w-[600px] h-auto rounded-2xl shadow-xl"
          loading={assets?.mobileMockup?.loading || "eager"}
          fetchpriority="high"
          width={assets?.mobileMockup?.width || 600}
          height={assets?.mobileMockup?.height || "auto"}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;