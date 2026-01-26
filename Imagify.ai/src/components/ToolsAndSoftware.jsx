import React from "react";
import { motion } from "motion/react";
import assets from "../assets/assets";

const tools = [
  {
    name: "Figma",
    icon: assets.figmaLogo.src,
    description: "UI/UX design and prototyping tool",
    category: "Design",
  },
  {
    name: "Flutter",
    icon: assets.flutterLogo.src,
    description: "Cross-platform mobile app development framework",
    category: "Development",
  },
  {
    name: "FastAPI",
    icon: assets.fastApiLogo.src,
    description: "Modern Python web framework for building APIs",
    category: "Backend",
  },
  {
    name: "React JS",
    icon: assets.reactJsLogo.src,
    description: "JavaScript library for building user interfaces",
    category: "Frontend",
  },
  {
    name: "AWS",
    icon: assets.awsLogo.src,
    description: "Amazon Web Services cloud infrastructure",
    category: "Cloud",
  },
];

const ToolsAndSoftware = () => {
  return (
    <motion.section
      id="tools-and-software"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black px-4 sm:px-12 pb-35 pt-10 lg:px-28 xl:px-40 py-24"
      aria-labelledby="tools-heading"
    >
      {/* Heading */}
      <header className="text-center max-w-3xl mx-auto">
        <motion.h2
          id="tools-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white"
        >
          The <span className="text-yellow-400">Tools & Software</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-400 text-lg"
        >
          Here are the tools & software we used to build Imagify AI
        </motion.p>
      </header>

      {/* Tools Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.12 }}
        viewport={{ once: true }}
        className="mt-16 flex flex-wrap items-center justify-center gap-10"
        role="list"
      >
        {tools.map((tool, index) => (
          <motion.article
            key={index}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
            role="listitem"
          >
            <div
              className="
                w-40 h-40 rounded-2xl
                bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]
                border border-yellow-400/10
                shadow-[0_0_30px_rgba(255,215,0,0.08)]
                flex items-center justify-center
              "
            >
              <img
                src={tool.icon}
                alt={`${tool.name} logo`}
                className="w-30 h-30 object-contain"
                width="120"
                height="120"
                loading="lazy"
              />
            </div>

            <h3 className="text-lg text-white font-semibold">
              {tool.name}
            </h3>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ToolsAndSoftware;
