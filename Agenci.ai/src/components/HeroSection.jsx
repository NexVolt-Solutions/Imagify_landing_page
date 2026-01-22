import React from "react";
import { motion } from "motion/react";
import assets from "../assets/assets";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-[550px] flex flex-col md:flex-row items-center  lg:ml-20 justify-between pt-10 px-8 pb-10 bg-black text-white"
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span
          className="w-[201px] h-[31px] px-4 mb-5 py-1.5 rounded-full border border-[#99E39E] bg-[#99E39E1A] flex items-center justify-center gap-2 text-[#99E39E] text-sm font-semibold"
          role="status"
          aria-label="Featured: Future of AI Wallpapers"
        >
          Future of AI Wallpapers
        </span>

        <h1
          id="hero-heading"
          className="text-[#FFFFFF] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[120%] tracking-[-0.6%] font-medium"
          style={{ fontFamily: "DM Sans" }}
        >
          Create Stunning AI Wallpapers Instantly
        </h1>

        <p
          className="text-gray-300 text-[16px] leading-[140%] tracking-[0%] mt-4"
          style={{ fontFamily: "DM Sans", fontWeight: 400 }}
        >
          Turn your ideas into high-quality wallpapers using AI — fast,
          creative, and effortless.
        </p>

        <div
          className="flex gap-[15px] mt-6 w-[277px] rounded-[12px]"
          role="group"
          aria-label="Download app"
        >
          {/* App Store */}
          <a
            href="https://apps.apple.com/app/imagify-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[132.85px] h-[47.23px] px-[3px] py-[5px] gap-[10px]
              rounded-[6.77px] bg-[#FFFFFF1A] flex items-center justify-center
              hover:bg-[#FFFFFF33] transition-colors"
            aria-label="Download Imagify AI on the App Store"
          >
            <img
              src={assets.appStoreBadge.src}
              alt={assets.appStoreBadge.alt}
              className="h-full object-contain"
              width="133"
              height="47"
              loading="eager"
            />
          </a>

          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=com.imagify"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[132.85px] h-[47.23px] px-[3px] py-[5px] gap-[10px]
              rounded-[6.77px] bg-[#FFFFFF1A] flex items-center justify-center
              hover:bg-[#FFFFFF33] transition-colors"
            aria-label="Get Imagify AI on Google Play"
          >
            <img
              src={assets.googlePlayBadge.src}
              alt={assets.googlePlayBadge.alt}
              className="h-full object-contain"
              width="133"
              height="47"
              loading="eager"
            />
          </a>
        </div>
      </motion.div>

      {/* Mobile Mockup */}
      <motion.div
        className="mt-12 md:mt-0 md:ml-12"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={assets.mobileMockup.src}
          alt={assets.mobileMockup.alt}
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[528px] h-auto rounded-xl shadow-lg"
          width="528"
          loading="eager"
          fetchpriority="high"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
